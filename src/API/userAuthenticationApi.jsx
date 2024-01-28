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

const SignupApi = async (email, password, displayName) => {
  const payload = {
    email,
    password,
    displayName,
  };
  const response = await api.post("signup", payload);
  return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { loginApi, SignupApi };
