import { api } from "./axiosConfig";
export const getPatients = async () => {
  const { data } = await api.get("/patients");
  return data;
};
export const addPatient = async (newPatient) => {
  const { data, error } = await api.post(`/patients`, newPatient);
  if (error) throw new Error("Patient was not created due to API error");
  return data;
};
