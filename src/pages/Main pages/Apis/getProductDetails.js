import axios from "axios";

export async function getProductDetails(id) {
  let fetchDetails = await axios
    .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  
  return fetchDetails.data;
}
