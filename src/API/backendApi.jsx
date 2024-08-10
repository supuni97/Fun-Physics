import axios from "axios";

const createBackendInstance = () => {
  const baseURL = "https://fun-physics-backend.onrender.com";

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
