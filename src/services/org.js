import { api } from "./axiosConfig";

export const getOrganization = async (org_id) => {
  return await api.get(`/organizations?orgId=${org_id}`);
};

export const getOrganizations = async () => {
  return await api.get(`/organizations`);
};

export const createOrganization = async (data) => {
  return await api.post(`/organizations`, data);
};
