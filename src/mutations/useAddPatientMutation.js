import { addPatient } from "../services/patients";
import { useMutation } from "@tanstack/react-query";
const useAddPatientMutation = () => {
  return useMutation({ mutationFn: addPatient });
};
export default useAddPatientMutation;
