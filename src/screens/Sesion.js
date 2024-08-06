import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [cedula, setCedula] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = async () => {
    const response = await fetch(`https://adamix.net/minerd/def/iniciar_sesion.php?cedula=${cedula}&clave=${clave}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.exito) {
      navigation.navigate('Incidences', { user: data.datos });
    } else {
      alert(data.mensaje);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Usuario</Text>
      <TextInput 
        value={cedula}
        onChangeText={setCedula}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Contraseña</Text>
      <TextInput 
        value={clave}
        onChangeText={setClave}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button style={{marginBottom: 20}} title="Iniciar Sesión" onPress={handleLogin} />
      <Button title="Registrar Visita" onPress={() => navigation.navigate('RegisterVisit')} />
    </View>
  );
};

export default Login;
