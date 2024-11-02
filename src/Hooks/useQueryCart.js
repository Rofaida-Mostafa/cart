
import { useQuery } from "react-query";

function useQueryCart(fn) {

  return useQuery({
    queryKey: ["cartProducts"],
    queryFn: fn,
  });
}

export default useQueryCart;
