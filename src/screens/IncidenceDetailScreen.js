import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const IncidenceDetailScreen = ({ route, navigation }) => {
  const { incidence, token } = route.params;
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchIncidence = async () => {
      try {
        const response = await fetch(`https://adamix.net/minerd/def/situacion.php?token=${token}&situacion_id=${incidence.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        if (result.exito) {
          setData(result.datos);
        } else {
          Alert.alert(result.mensaje);
        }
      } catch (error) {
        Alert.alert('Error fetching data', error.message);
      }
    };

    const fetchWeather = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=5e71a3ce68b021dc07ef902194a27a13`);
        const result = await response.json();
        if (result) {
          setWeather(result);
        } else {
          Alert.alert('Error fetching weather data');
        }
      } catch (error) {
        Alert.alert('Error fetching weather data', error.message);
      }
    };

    fetchIncidence();
    fetchWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data ? (
        <View>
          <Text style={styles.title}>{data.motivo}</Text>
          <Image source={{ uri: data.foto_evidencia }} style={styles.image} />
          <Text style={styles.comment}>{data.comentario}</Text>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 18.735693,
              longitude: -70.162651,
              latitudeDelta: 0.5,
              longitudeDelta: 0.5,
            }}
          >
            <Marker
              coordinate={{ latitude: 18.735693, longitude: -70.162651 }}
              title="República Dominicana"
            />
          </MapView>

          {weather ? (
            <View style={styles.weatherContainer}>
              <Text style={styles.weatherTitle}>Current Weather:</Text>
              <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
              <Text style={styles.weatherText}>Humidity: {weather.main.humidity}%</Text>
              <Text style={styles.weatherText}>Conditions: {weather.weather[0].description}</Text>
            </View>
          ) : (
            <Text style={styles.loadingText}>Loading weather...</Text>
          )}
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
  },
  comment: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'justify',
  },
  map: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
  },
  weatherContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  weatherTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  weatherText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 2,
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default IncidenceDetailScreen;
