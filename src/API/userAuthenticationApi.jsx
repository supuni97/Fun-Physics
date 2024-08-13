import backendInstance from "./backendApi";

const api = backendInstance();

const loginApi = async (email, password) => {
  const payload = {
    email,
    password,
  };
  const response = await api.post("login", payload);
  return response;
};

const SignupApi = async (email, password, displayName, school) => {
  const payload = {
    email,
    password,
    displayName,
    school
  };
  const response = await api.post("signup", payload);
  return response;
};

export  { loginApi, SignupApi };
