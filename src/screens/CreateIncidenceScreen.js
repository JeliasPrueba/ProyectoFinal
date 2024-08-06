import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';


const CreateIncidenceScreen = ({ route, navigation }) => {

  const { token } = route.params;
 
  const [cedulaDirector, setCedulaDirector] = useState('');
  const [codigoCentro, setCodigoCentro] = useState('');
  const [motivo, setMotivo] = useState('');
  const [fotoEvidencia, setFotoEvidencia] = useState(null);
  const [comentario, setComentario] = useState('');
  const [notaVoz, setNotaVoz] = useState(null);
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = async () => {
     const response = await fetch(`https://adamix.net/minerd/minerd/registrar_visita.php?cedula_director=${cedulaDirector}&codigo_centro=${codigoCentro}&motivo=${motivo}&foto_evidencia=${fotoEvidencia}&comentario=${comentario}&nota_voz=${notaVoz}&latitud=${latitud}&longitud=${longitud}&fecha=${fecha}&hora=${hora}&token=${token}`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       }
     });
     const data = await response.json();
     if (data.exito) {
       navigation.navigate('Incidences');
     } else {
       alert(data.mensaje);
     }
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
      <Text>Cédula Director:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={cedulaDirector}
          onChangeText={setCedulaDirector}
        />

        <Text>Código Centro:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={codigoCentro}
          onChangeText={setCodigoCentro}
        />

        <Text>Motivo:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={motivo}
          onChangeText={setMotivo}
        />

        <Text>Comentario:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={comentario}
          onChangeText={setComentario}
        />

        <Text>Comentario:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={comentario}
          onChangeText={setComentario}
        />

        <Text>Latitud:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={latitud}
          onChangeText={setLatitud}
        />

        <Text>Longitud:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={longitud}
          onChangeText={setLongitud}
        />

        <Text>Fecha:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={fecha}
          onChangeText={setFecha}
        />

        <Text>Hora:</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={hora}
          onChangeText={setHora}
        />

        <Text>Imagen (URL):</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={fotoEvidencia}
          onChangeText={setFotoEvidencia}
        />

        <Text>Nota de Voz (URL):</Text>
        <TextInput
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          value={notaVoz}
          onChangeText={setNotaVoz}
        />

        <Button title="Crear incidencia" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default CreateIncidenceScreen;
