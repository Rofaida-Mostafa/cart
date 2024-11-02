import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Loader from "./Loader";
// import useQueryCategories from "../Hooks/useQueryCategories";
// import axios from "axios";
// import LoaderSlider from "./LoaderSlider";

function ProductImgSlider({ detailsData }) {
  // const [imgSrc, setImgSrc] = useState("");
// console.log(detailsData.images.length);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:  1,
    autoplay: true,
    autoplaySpeed: 2700,
    initialSlide: 0,
    arrows: false,
  };

  // function changeSrc(e) {
  //   setImgSrc(e.target.src);
  // }

  return (
    <div className="slider-container p-2">
      <Slider {...settings}>
        {detailsData?.images.length!=1 ? (
          detailsData?.images?.map((img, ind) => (
            <img
              key={img}
              className={`cursor-pointer rounded-lg w-full`}
              src={img}
              alt={detailsData?.title}
            />
          ))
        ) : (
          <img
            src={detailsData?.imageCover}
            className="w-full"
            alt={detailsData?.title}
          />
        )}
      </Slider>
    </div>
  );
}

export default ProductImgSlider;

{
  /* <img
src={imgSrc ? imgSrc : detailsData?.imageCover}
// src={detailsData?.imageCover}
className="w-full"
alt={detailsData?.title}
/>
<ul className="flex gap-2 relative justify-center md:my-4 mt-2 mb-8">
{detailsData.images.map((img, ind) => (
  <li key={img}>
    <motion.img
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={changeSrc}
      className={`cursor-pointer`}
      width={80}
      src={img}
      alt={detailsData?.title}
    />
  </li>
))}
</ul> */
}
