import { api } from "./axiosConfig";

export const getPatients = async () => {
  const { data } = await api.get("/patients");
  return data;
};
