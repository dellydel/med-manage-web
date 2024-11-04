import { api } from "./axiosConfig";
export const getPatients = async () => {
  const { data } = await api.get("/patients");
  return data;
};
export const deletePatient = async (patientId) => {
  const { data, error } = await api.delete(`/patients/${patientId}`);
  if (error) throw new Error("Patient could not be deleted: " + error);
  return data;
};
