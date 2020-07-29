import axios from "axios";

const baseURL = "https://api.github.com/";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  function requestCB(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `token ${token}`;
    return config;
  },
  function reqErrorCB(error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function responseCB(response = {}) {
    return response.data;
  },
  function resErrorCB(error) {
    return Promise.reject(error);
  }
);

export default api;
