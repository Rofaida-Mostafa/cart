
import { useQuery, } from 'react-query'

function useQueryCategories(fn) {

  return  useQuery({
    queryKey: ["Category"],
    queryFn: fn,
  });
}

export default useQueryCategories