import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_GATEWAY_BASE_URL}`,
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const token = user.id_token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
