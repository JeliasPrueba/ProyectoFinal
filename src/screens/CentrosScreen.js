import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { getCentrosByRegional } from "../services/api";

const CentrosScreen = () => {
  const [regional, setRegional] = useState('');
  const [centros, setCentros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCentros = async () => {
    if (!regional) return; // No hacer nada si no hay código regional
    setLoading(true);
    setError(null);
    try {
      const data = await getCentrosByRegional(regional);
      setCentros(data.datos);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleCentroPress = (centro) => {
    Alert.alert(
      centro.nombre,
      `Código: ${centro.codigo}\nMunicipio: ${centro.d_dmunicipal}\nCoordenadas: ${centro.coordenadas}\nDistrito: ${centro.distrito}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Centros Educativos</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el código regional"
          keyboardType="numeric"
          value={regional}
          onChangeText={setRegional}
        />
        <Button title="Buscar" onPress={fetchCentros} color="#007BFF" />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={centros}
          keyExtractor={(item) => item.codigo}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCentroPress(item)}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.cardSubtitle}>{item.d_dmunicipal}</Text>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007BFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777777',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF0000',
    fontSize: 16,
    marginTop: 20,
  },
});

export default CentrosScreen;


