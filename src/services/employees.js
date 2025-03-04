import { api } from "./axiosConfig";
export const getEmployees = async () => {
  const { data, error } = await api.get("/employees");
  if (error) throw new Error(`Error getting employees`);
  return data;
};
export const getEmployeesByType = async (type) => {
  const { data, error } = await api.get(`/employees?type=${type}`);
  if (error) throw new Error(`Error getting employees`);
  return data;
};
export const postEmployee = async (employeeData) => {
  const { data, error } = await api.post("/employees", employeeData);
  if (error) throw new Error("Employee data could not be saved");
  return data;
};
export const putEmployee = async (employeeData) => {
  const { data, error } = await api.put("/employees", employeeData);
  if (error) throw new Error("Employee data could not be saved");
  return data;
};
export const deleteEmployee = async (employeeId) => {
  const { data, error } = await api.delete(`/employees/${employeeId}`);
  if (error)
    throw new Error(
      `Employee could not be deleted due to API error : ${error.message}`
    );
  return data;
};
