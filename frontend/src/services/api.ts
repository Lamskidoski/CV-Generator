// import axios from 'axios';

// export const createCV = async (cvData: object) => {
//     return await axios.post('http://localhost:5173/api/cv', cvData);
// };

import axios from "axios";

// Bas-URL till din backend
const API_BASE_URL = "http://localhost:3000/api/cv"; // Ändra till din backend-URL i produktion

// 📝 Skicka CV-data till backend (POST)
export const createCV = async (cvData: {
  name: string;
  email: string;
  experiences: string;
  education: string;
}) => {
  try {
    const response = await axios.post(API_BASE_URL, cvData);
    return response.data; // Returnerar serverns svar
  } catch (error) {
    console.error("Fel vid skapande av CV:", error);
    throw error;
  }
};

// 📥 Hämta CV från backend (GET)
export const getCV = async (cvId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${cvId}`);
    return response.data;
  } catch (error) {
    console.error("Fel vid hämtning av CV:", error);
    throw error;
  }
};
