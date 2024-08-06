const BASE_URL = 'https://adamix.net/minerd/';

export const getIncidences = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}def/situaciones.php/q?token=${token}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};


export const getNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}def/noticias.php/`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// src/services/api.js

export const getCentrosByRegional = async (regional) => {
  try {
    const response = await fetch(`https://adamix.net/minerd/minerd/centros.php?regional=${regional}`);
    const data = await response.json();
    console.log('Fetched data:', data); // Verificar los datos recibidos
    return data;
  } catch (error) {
    console.error('Error fetching centros:', error);
    return [];
  }
};


export const getSchoolDetails = async (schoolCode) => {
  try {
    const response = await fetch(`${BASE_URL}school_details.php?code=${schoolCode}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getDirectorDetails = async (cedula) => {
  try {
    const response = await fetch(`${BASE_URL}director_details.php?cedula=${cedula}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

