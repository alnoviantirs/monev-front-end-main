/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";

const API_URL = "https://ulbicontacts-59a677aa5bea.herokuapp.com/login";

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });

    const result = response.data;

    // save token to cookie
    Cookies.set("token", result.token, { expires: 1 });

    // redirect to /dashboard
    window.location.href = "/dashboard";

    
  } catch (error) {
    console.error("Login Failed: ", error);
  }
};

export const useCheckTokenAndRedirect = (urlWithToken, urlWithoutToken) => {

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      if (urlWithToken) {
        window.location.href = `/${urlWithToken}`;        
      }
      window.location.href = "/dashboard";
    }else {
      if (urlWithoutToken) {
        window.location.href = `/${urlWithoutToken}`; 
      }
      window.location.href = "/"; //ke halaman login
    }
  })
}
