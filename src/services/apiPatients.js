import axios from "axios";
export async function getPatients() {
  const url =
    "https://v5bgbb7bq3.execute-api.us-east-1.amazonaws.com/development/patients";
  const { data } = await axios.get(url);
  return data;
}
