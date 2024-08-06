import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { getIncidences } from '../services/api';

const IncidencesScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [incidences, setIncidences] = useState([]);

  useEffect(() => {
    const fetchIncidences = async () => {
      const data = await getIncidences(user.token);
      setIncidences(data);
    };
    fetchIncidences();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("About")} 
          title='Acerca De' 
          color="#841584"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("News")} 
          title='Noticias recomendadas' 
          color="#841584"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("Centros")} 
          title='Centros educativos' 
          color="#841584"
        />
      </View>

    <Button 
      onPress={() => navigation.navigate("CreateIncidenceScreen", { token: user.token })} 
      title='Crear incidencia'
    />

    <Text style={styles.title}>Mis Incidencias</Text>

    {incidences ? (
      <FlatList
        data={incidences.datos}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => navigation.navigate('IncidenceDetail', { incidence: item, token: user.token })}
          >
            <Text style={styles.itemText}>{item.motivo}</Text>
          </TouchableOpacity>
        )}
      />
    ) : (
      <Text>Loading...</Text>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
  },
});

export default IncidencesScreen;
