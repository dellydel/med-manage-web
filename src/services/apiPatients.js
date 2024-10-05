import axios from "axios";
export async function getPatients() {
  const { data, error } = await axios.get(
    "https://v5bgbb7bq3.execute-api.us-east-1.amazonaws.com/development/patients"
  );
  if (error) {
    console.log(error);
    throw new Error("Patients could not be loaded");
  }
  return data;
}
