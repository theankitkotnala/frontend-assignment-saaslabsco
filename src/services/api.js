/**
 * Axios file 
 * config file , can alter according to the needs
 */
import axios from "axios";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};
const api = axios.create(defaultOptions);


export default api;
