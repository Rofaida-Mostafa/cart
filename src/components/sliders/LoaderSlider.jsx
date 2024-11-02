import React from "react";
import { Fragment } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
const LoaderSlider = () => {
  return (
    <Fragment>
      <div className=" absolute left-0 right-0 top-[8%]  mb-[9vh] h-[150px] flex justify-center items-center  bg-gray-800 bg-opacity-5">
       
         <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        /> 
      </div>
    </Fragment>
  );
};

export default LoaderSlider;
