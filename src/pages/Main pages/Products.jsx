import axios from "axios";
import React, { Fragment } from "react";
import Loader from "../../components/sliders/Loader";
import useQueryProducts from "../../Hooks/useQueryProducts";
import Items from "../../components/Items";
import Responsive from "../../components/Responsive";
// import useMutateCart from "../../Hooks/useMutateCart";

const Products = () => {
  const fetchProducts = async () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  };
  const getProducts = useQueryProducts(fetchProducts);
  const { data, isError, error, isLoading, isFetching, isSuccess } =
    getProducts;

  const productsData = data?.data?.data;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
  }


  return (
    <Fragment>
      <div className=" py-4 w-full flex flex-col gap-12">
        {/* <div className=" p-4 overflow-hidden">
          <Responsive productsData={productsData} />
        </div> */}

        <div className=" grid md:grid-cols-3 lg:grid-cols-6 gap-4  px-4">
          {productsData?.map((product) => (
            <Items key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
