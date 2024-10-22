import { api } from "./axiosConfig";

export const getEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};

export const getEmployeesByType = async (type) => {
  const { data } = await api.get(`/employees?type=${type}`);
  return data;
};
