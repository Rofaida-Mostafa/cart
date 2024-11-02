import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useQueryCategories from "../Hooks/useQueryCategories";
import axios from "axios";
import LoaderSlider from "./sliders/LoaderSlider";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
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
  async function fetchCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  const { data, isLoading, isError, error } =
    useQueryCategories(fetchCategories);
  const categoryData = data?.data?.data;
  if (isLoading) {
    return <LoaderSlider />;
  }
  if (isError) {
    console.log(error);
  }


  return (
    <div className="slider-container p-2">
      <Slider {...settings}>
      {categoryData?.map((category) => (
            <img className=" h-[200px]"  key={category._id}  src={category.image} alt={category.name}/>
          ))}
      </Slider>
    </div>
  );
}

export default Responsive;
