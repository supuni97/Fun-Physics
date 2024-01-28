import axios from "axios";

const createBackendInstance = () => {
  const baseURL = "http://localhost:5000/";

  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};

export default createBackendInstance;
