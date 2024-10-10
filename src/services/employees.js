import { api } from "./axiosConfig";

export const getEmployees = async () => {
  const { data } = await api.get("/employees");
  return data;
};
