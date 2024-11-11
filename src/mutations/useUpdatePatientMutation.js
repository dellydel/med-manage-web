import { updatePatient } from "../services/patients";
import { useMutation } from "@tanstack/react-query";
const useUpdatePatientMutation = () => {
  return useMutation({ mutationFn: (data) => updatePatient(data) });
};
export default useUpdatePatientMutation;
