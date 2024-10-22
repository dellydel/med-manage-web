import { api } from "./axiosConfig";
export const getEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};
export const addEmployee = async (newEmployee) => {
  const { data, error } = await api.post("/employees", newEmployee);
  if (error) throw new Error("Employee could not be added");
  return data;
};
