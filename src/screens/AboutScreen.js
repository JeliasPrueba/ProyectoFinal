import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import foto from "../assets/Foto.jpeg"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={foto} style={styles.image} />
      <Text style={styles.name}>Nombre: Jelias Octavio Garcia Sierra</Text>
      <Text style={styles.matricula}>Matrícula: 2021-0871</Text>
      <Text style={styles.quote}>"La educación es el arma más poderosa que puedes usar para cambiar el mundo." - Nelson Mandela</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  matricula: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});


export default AboutScreen;
