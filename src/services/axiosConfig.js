import axios from "axios";
import { refreshToken } from "../services/auth";

const isJwtExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp;
    const now = Math.floor(Date.now() / 1000);
    return now >= exp;
  } catch {
    return true;
  }
};

const skipUrls = ["/login", "/refresh-token", "update-password"];

const shouldInterceptRequest = (config) => {
  return !skipUrls.some((url) => config.url?.includes(url));
};

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_GATEWAY_BASE_URL}`,
});

api.interceptors.request.use(
  async (config) => {
    if (!shouldInterceptRequest(config)) {
      return config;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id_token) {
      const isExpired = isJwtExpired(user.id_token);
      if (isExpired) {
        try {
          const response = await refreshToken(user.refresh_token);
          const newUser = {
            ...user,
            access_token: response.data.accessToken,
            id_token: response.data.idToken,
          };
          localStorage.setItem("user", JSON.stringify(newUser));
          config.headers.Authorization = `Bearer ${response.data.idToken}`;
        } catch (error) {
          console.log(error);
          window.location.href = "/login";
          return Promise.reject(error);
        }
      } else {
        config.headers.Authorization = `Bearer ${user.id_token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!shouldInterceptRequest(originalRequest) || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await refreshToken(user.refresh_token);
        const newUser = {
          ...user,
          access_token: response.data.accessToken,
          id_token: response.data.idToken,
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        originalRequest.headers.Authorization = `Bearer ${response.data.idToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
