import { api } from "./axiosConfig";
export const getEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};
export const getEmployeesByType = async (type) => {
  const { data } = await api.get(`/employees?type=${type}`);
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
