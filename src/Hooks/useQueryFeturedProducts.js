import { useQuery } from "react-query";

function useQueryFeturedProducts(fn) {
  return useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fn,
   
  });
}

export default useQueryFeturedProducts;
