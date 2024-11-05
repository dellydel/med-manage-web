import { useMutation } from "@tanstack/react-query";
import { deleteEmployee } from "../services/employees";
export function useDeleteEmployeeMutation() {
  return useMutation({
    mutationFn: (id) => deleteEmployee(id)
  });
}
