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
export const addPatient = async (newPatient) => {
  const { data, error } = await api.post(`/patients`, newPatient);
  if (error) throw new Error("Patient was not created due to API error");
  return data;
};
export const updatePatient = async (patient) => {
  const { data, error } = await api.put(`/patients`, patient);
  if (error) throw new Error(`Patient Data not Updated : ${error.message}`);
  return data;
};

export const postAssignClinician = async (assignData) => {
  const { data, error } = await api.post("/assignments", assignData);
  if (error)
    throw new Error(`Clinician could not be assigned: ${error.message}`);
  return data;
};
export const putAssignClinician = async (assignData) => {
  const { data, error } = await api.put("/assignments", assignData);
  if (error)
    throw new Error(`Clinician could not be re assigned: ${error.message}`);
  return data;
};
