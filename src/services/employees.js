import { api } from "./axiosConfig";
export const getEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};

export const getEmployeesByType = async (type) => {
  const { data } = await api.get(`/employees?type=${type}`);
  return data;
};

export const addEmployee = async (newEmployee) => {
  const addPath = await api.post("/employees", newEmployee);
  const editPath = await api.put("/employees", newEmployee);
  const { data, error } = newEmployee.employeeId ? editPath : addPath;
  if (error) throw new Error("Employee data could not be saved");
  return data;
};
