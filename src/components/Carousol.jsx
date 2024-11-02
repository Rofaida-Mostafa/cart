import React from "react";
import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Responsive({ featuredData }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {featuredData?.map((product) => (
          <div className="slider p-1" key={product.id}>
            {" "}
            <Link
              to={`/productdetails/${product?._id}/${product?.category?._id}`}
            >
              {" "}
              <div className="cursor-pointer img shadow-sm rounded-lg border-[0.2px] border-slate-200">
                <img
                  className="rounded-lg "
                  src={product.imageCover}
                  alt={product.title}
                />
              </div>
              <div className="flex justify-between px-1">
                {" "}
                <button className="bg-green-700 w-20 text-white py-1 px-2 m-2 rounded btn">
                  Add
                </button>
                <button className="bg-red-700 w-20 text-white py-1 px-2 m-2 rounded btn2">
                  Delete
                </button>
              </div>{" "}
            </Link>{" "}
          </div>
        ))}{" "}
      </Slider>
    </div>
  );
}
