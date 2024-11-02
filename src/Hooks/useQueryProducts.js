
import { useQuery, } from 'react-query'

function useQueryProducts(fn) {

  return  useQuery({
    queryKey: ["products"],
    queryFn: fn,
  });
}

export default useQueryProducts