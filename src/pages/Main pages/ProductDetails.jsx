import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../../components/sliders/Loader";
import FeaturedProducts from "./FeaturedProducts";
import useQueryProductDetails from "../../Hooks/useQueryProductDetails";
import axios from "axios";
import ProductImgSlider from "../../components/sliders/ProductImgSlider";

export default function ProductDetails() {

  const { id, categoryId } = useParams();
  // const [ productDataDetails, setroductDataDetails]  = useState();

  async function fetchDetails() {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
  const detailsQuery = useQueryProductDetails(fetchDetails,id);
  const { data, isError, error, isLoading, refetch, isSuccess } =
    detailsQuery;
  const detailsData = data?.data?.data;


 

  if (isLoading) {
    return (
      <div className="">
        <Loader />
      </div>
    );
  }
  return (
    <Fragment>
      {" "}
      <div className="flex md:flex-row flex-wrap flex-col items-center justify-center p-4">

        <div className="md:w-1/5 w-[70%] md:p-3 md:mb-0 mb-9 ">
        <h1 className="md:hidden underline text-green-700 text-3xl font-semibold md:text-left text-center pacifico-regular md:mb-2">
              {detailsData?.category?.name}
            </h1>
        <ProductImgSlider detailsData={detailsData}/>
        </div>

        <div className="md:w-2/3 px-4 py-6 ">
          
          <div className="details md:space-y-4 space-y-2 md:px:6 px-6 md:py-4 md:mt-9 mt-[-4vh] md:border-[0px] rounded-lg border-[2px] border-green-800 border-opacity-5">
            <h1 className="hidden md:block underline text-green-700 text-3xl font-semibold md:text-left text-center pacifico-regular md:mb-2">
              {detailsData?.category?.name}
            </h1>

            <h4 className=" text-lg text-gray-600 md:text-left">
              <span className="text-slate-500 roboto-thin text-xl">
                Title:{" "}
              </span>
              {detailsData?.title}.
            </h4>

            <div className=" text-gray-600 font-bold">
              {" "}
              <span className="text-slate-500 roboto-thin text-lg">
                Description:{" "}
              </span>
              
              <p className="md:flex hidden">
                {detailsData?.description?.split(" ").slice(0, 35).join(" ")}.
              </p>
              <p className="md:hidden flex ">
                {" "}
                {detailsData?.description?.split(" ").slice(0, 15).join(" ")}.
              </p>
            </div>

            <div className="price flex md:flex-row flex-col md:items-center md:space-x-32">
              {detailsData?.priceAfterDiscount ? (
                <div className="space-x-4 ml-1 text-slate-500 font">
                  Price:{" "}
                  <span className="line-through font-semibold text-gray-400">
                    {detailsData?.price} EGP
                  </span>
                  <span className="text-cyan-700 font-semibold">
                    {detailsData?.priceAfterDiscount} EGP
                  </span>
                </div>
              ) : (
                <span className="font text-slate-500">
                  Price:{" "}
                  <span className="text-cyan-700">
                    {" "}
                    {detailsData?.price} EGP
                  </span>
                </span>
              )}
              <span className="md:mt-0 mt-3 text-slate-500 font space-x-1">
                {" "}
                Rate: <i className="fas fa-star text-yellow-600"></i>{" "}
                <span className="text-cyan-700">
                  {detailsData?.ratingsAverage}
                </span>
              </span>
            </div>
          </div>
          <div className=" flex md:justify-start justify-center">
            {" "}
            <button
            
              className="btn block md:m-6 my-4  w-96 bg-green-700 text-white p-2 rounded"
            >
              Add To cart
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center mt-14">
          <h2 className="categoryName rounded-xl border-solid border-cyan-800  border-2 text-xl px-14 py-2 my-3 text-green-600 bg-slate-100">
            Related products
          </h2>
        </div>
        <FeaturedProducts categoryId={categoryId} />
      </div>
    </Fragment>
  );
}
