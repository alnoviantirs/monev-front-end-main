import axios from "axios";

const API_URL = "https://ulbicontacts-59a677aa5bea.herokuapp.com/login";

export const loginUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};
