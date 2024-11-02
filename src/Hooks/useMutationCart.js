
import { useMutation, useQueryClient } from "react-query";

function useMutationCart(fn) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:(fn),
    onSuccess: () => {
      queryClient.invalidateQueries(["cartProducts"]);
    },
  });
}

export default useMutationCart;
