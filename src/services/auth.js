import { api } from "./axiosConfig";

export const validateCredentials = async (email, password) => {
  return await api.post("/login", { email, password });
};
