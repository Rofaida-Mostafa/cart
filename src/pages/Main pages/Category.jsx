import React, { Fragment } from "react";
import axios from "axios";
import useQueryCategories from "../../Hooks/useQueryCategories";
import Loader from "../../components/sliders/Loader";
import Items from "../../components/Items";
import { Link } from "react-router-dom";

export default function Category() {
  async function fetchCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  const { data, isLoading, isError, error } =
    useQueryCategories(fetchCategories);
  console.log(data);
  const categoryData = data?.data?.data;
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
  }
  return (
    <Fragment>


    <div className=" grid md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
    {categoryData?.map((category) => (
      
      <div key={category?._id} className="  shadow-lg border-[1px] border-slate-200 rounded-lg flex flex-col gap-3 cursor-pointer bg-slate-100">
        <p className="categoryName text-md pacifico-regular  p-2 text-gray-400">
          {category?.name}
        </p>
        <div className="img  shadow-sm rounded-lg border-[0.2px] border-slate-600">
          <img
            className="rounded-lg h-[300px] w-[300px]"
            src={category?.image}
            alt={category?.name}
          />
        </div>
       

      </div>
            ))}

    </div>
    </Fragment>
  );
}
