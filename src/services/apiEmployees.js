import axios from "axios";
export async function getEployees() {
  const { data, error } = await axios.get(
    "https://v5bgbb7bq3.execute-api.us-east-1.amazonaws.com/development/employees"
  );
  if (error) {
    console.log(error);
    throw new Error("Employees could not be loaded");
  }
  return data;
}
