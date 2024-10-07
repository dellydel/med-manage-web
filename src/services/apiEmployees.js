import axios from "axios";
export async function getEmployees() {
  const url = import.meta.env.VITE_API_GATEWAY_BASE_URL;
  const { data } = await axios.get(`${url}/employees`);
  return data;
}
