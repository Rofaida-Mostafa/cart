import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useMutationCart from "../Hooks/useMutationCart";
import axios from "axios";

function Items({ product }) {
  
  const token = localStorage.getItem("tkn");

  async function addItemToCart(id) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: id,
      },
      {
        headers: token
      }
    );
  }

  const {
    mutate: mutateCart,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useMutationCart(addItemToCart);

  if (isError) {
    console.log(error.response.data.message);
  }

  return (
    <Fragment>
      <div
        key={product.id}
        className="product  shadow-lg border-[1px] border-slate-200 rounded-lg flex flex-col gap-3 cursor-pointer bg-slate-100"
      >
        <Link to={`/productDetails/${product?.id}/${product?.category?._id}`}>
          {" "}
          <p className="categoryName text-md pacifico-regular  p-2 text-gray-400">
            {" "}
            {product.category.name}
          </p>
          <div className="img shadow-sm rounded-lg border-[0.2px] border-slate-200">
            <img
              className="rounded-lg"
              src={product.imageCover}
              alt={product.title}
            />
          </div>
          <div className="name h-[2.5vh] ">
            <div className="productName line-clamp-1 ">
              <h3 className="title  text-cyan-700 m-0 border-2 px-1 shadow-md border-transparent">
                {product.title.split(" ").slice(0, 4).join(" ")}
              </h3>
            </div>
          </div>
          <div className="other flex justify-between p-2">
            <div className="price flex justify-around ">
              {product.priceAfterDiscount ? (
                <span className="line-through mr-[0.4vw] text-gray-400">
                  {" "}
                  {product.price}
                </span>
              ) : (
                <span className="text-green-500"> {product.price}</span>
              )}
              <span className="text-green-500">
                {product.priceAfterDiscount}
              </span>
            </div>
            <div className="rate">
              <span className="icon">
                <i className="fa-solid fa-star text-yellow-400"></i>
              </span>
              <span className="rating-No"> {product.ratingsAverage}</span>
            </div>
          </div>
        </Link>
        <div className="flex justify-between px-1">
          {" "}
          <button
            onClick={() => {
              mutateCart(() => {
                addItemToCart(product.id);
              });
            }}
            className="bg-green-700 w-20 text-white py-1 px-2 m-2 rounded btn"
          >
            Add
          </button>
          <button className="bg-red-700 w-20 text-white py-1 px-2 m-2 rounded btn2">
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Items;
