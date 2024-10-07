import axios from "axios";
export async function getPatients() {
  const url = import.meta.env.VITE_API_GATEWAY_BASE_URL;
  const { data } = await axios.get(`${url}/patients`);
  return data;
}
