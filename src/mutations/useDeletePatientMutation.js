import { useMutation } from "@tanstack/react-query";
import { deletePatient } from "../services/patients";
export function useDeletePatientMutation() {
  return useMutation({
    mutationFn: (id) => deletePatient(id)
  });
}
