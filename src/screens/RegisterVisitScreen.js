import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterVisitScreen = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleRegister = async () => {
    const response = await fetch(`https://adamix.net/minerd/def/registro.php?cedula=${cedula}&nombre=${nombre}&apellido=${apellido}&clave=${clave}&correo=${correo}&telefono=${telefono}&fecha_nacimiento=${fechaNacimiento}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.exito) {
      alert('Registro exitoso');
    } else {
      alert(data.mensaje);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Cédula</Text>
      <TextInput 
        value={cedula}
        onChangeText={setCedula}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Nombre</Text>
      <TextInput 
        value={nombre}
        onChangeText={setNombre}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Apellido</Text>
      <TextInput 
        value={apellido}
        onChangeText={setApellido}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Clave</Text>
      <TextInput 
        value={clave}
        onChangeText={setClave}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Correo</Text>
      <TextInput 
        value={correo}
        onChangeText={setCorreo}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Teléfono</Text>
      <TextInput 
        value={telefono}
        onChangeText={setTelefono}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Fecha de Nacimiento</Text>
      <TextInput 
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterVisitScreen;
