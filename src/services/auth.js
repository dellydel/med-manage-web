import { api } from "./axiosConfig";

export const validateCredentials = async (email, password) => {
  return await api.post("/login", { email, password });
};

export const changePassword = async (email, newPassword, session) => {
  return await api.post("/update-password", { email, newPassword, session });
};

export const refreshToken = async (refreshToken) => {
  return await api.post(`/refresh-token`, { refresh_token: refreshToken });
};
