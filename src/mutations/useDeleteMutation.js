import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePatient } from "../services/patients";
export function useDeleteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deletePatient(id)
  });
}
