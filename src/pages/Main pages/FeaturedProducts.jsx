import React, { Fragment, useEffect } from "react";
import useQueryFeturedProducts from "../../Hooks/useQueryFeturedProducts";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from "../../components/Carousol";

const FeaturedProducts = ({id, categoryId, children }) => {

  const relatedCategoryProducts = () => {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`
    );
  };

  const feature = useQueryFeturedProducts(relatedCategoryProducts);
  const { data, isError, error, isLoading, isFetching, isSuccess } = feature;
  // console.log(data)
  if (isError) {
    console.log(error);
  }

  const featuredData = data?.data?.data;

  return (
    <Fragment>
    <div className="w-full p-9  overflow-hidden">
        <Responsive featuredData={featuredData}/>
        
     
      </div> 
    </Fragment>
  );
};

export default FeaturedProducts;
