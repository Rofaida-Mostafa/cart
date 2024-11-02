import { useQuery } from "react-query"

const useQueryProductDetails =(fn,id) => {

  return  useQuery({
    queryKey: ["productDetails",id],
    queryFn: fn
})
}

export default useQueryProductDetails