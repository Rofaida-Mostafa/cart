import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ColorRing } from "react-loader-spinner";

const ForgetPassword = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState();
  const [isSuccesMessage, setIsSuccesMessage] = useState(null);
  const navigate = useNavigate();

  async function forget(values) {
    setIsClicked(true);
    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        values
      )
      .then((res) => {
        console.log(">>>>>>>>>>>", res);
        setIsSuccesMessage(res.data.message);
        setIsClicked(false);
        setTimeout(() => {
          setIsSuccesMessage(null);
          navigate("/verify");
        }, 2000);
      })
      .catch((error) => {
        setIsClicked(false);

        setIsErrorMessage(error.data.message);
        setTimeout(() => {
          setIsErrorMessage(null);
        }, 2000);
      });
  }

  const forgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: forget,
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-[7%] gap-6 bg-gray-100 w-full">
      {isErrorMessage ? (
        <div
          className="relative  text-center w-[500px] md:w-[700px] h-fit  p-4 mb-4  text-red-800 rounded-lg bg-yellow-50 font-bold dark:bg-red-100 dark:text-red-500"
          role="alert"
        >
          {isErrorMessage}
        </div>
      ) : (
        ""
      )}
      {isSuccesMessage ? (
        <div
          className="relative text-center w-[500px] md:w-[700px] h-fit p-4 mb-4 text-white rounded-lg bg-yellow-50 font-bold dark:bg-green-100 dark:text-green-500"
          role="alert"
        >
          {isSuccesMessage}
        </div>
      ) : (
        ""
      )}

      <div className="bg-slate-300 p-6 shadow-lg max-w-md w-full rounded-md ">
        <h1 className="text-2xl font-bold mb-6 text-center text-cyan-700 pacifico-regular">
          Forget password
        </h1>
        <form onSubmit={forgetFormik.handleSubmit}>
          <div className="form-group mb-2">
            <label
              className="block text-gray-700 font-bold mb-2 "
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="text"
              className="form-control w-full p-2 rounded-md"
              id="email"
              value={forgetFormik.email}
              onChange={forgetFormik.handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group form-check my-2">
            <Link
              className="m-2 text-gray-700 font-medium mb-2 form-check-label"
              to={"/signIn"}
            >
              Login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-600 font-serif text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {!isClicked ? (
              "Send"
            ) : (
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#eee", "#fff", "#fff", "#eee", "#eee"]}
              />
            )}
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
