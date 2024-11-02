import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AuthContext } from "../../Context/Auth";
import { jwtDecode } from "jwt-decode";
function Login() {
  const [isClicked, setIsClicked] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState();
  const [isSuccesMessage, setIsSuccesMessage] = useState(null);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { token, setToken } = authContext;

  async function Login(values) {
    setIsClicked(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((res) => {
        console.log(">>>>>>>>>>>", res);
        const tkn = res.data.token;
        localStorage.setItem("tkn", tkn);
        setToken(jwtDecode(tkn));
        setIsSuccesMessage("Logged successfully!");
        setIsClicked(false);
        setTimeout(() => {
          setIsSuccesMessage(null);
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setIsClicked(false);
        console.log(">>>>>>>>>>>", error);
        setIsErrorMessage(error.response.data.message);
        setTimeout(() => {
          setIsErrorMessage(null);
        }, 2000);
      });
  }

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: Login,
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
          Sign In
        </h1>
        <form onSubmit={loginFormik.handleSubmit}>
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
              value={loginFormik.email}
              onChange={loginFormik.handleChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mb-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              className="form-control w-full p-2 rounded-md"
              id="password"
              value={loginFormik.password}
              onChange={loginFormik.handleChange}
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group form-check my-2 flex justify-around">
            <div className="">
              {" "}
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label
                className="m-2 text-gray-500 mb-2 form-check-label"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>
            <div className="font-semibold">
              {" "}
              <Link
                className="m-2 text-gray-500  mb-2 form-check-label hover:text-red-500"
                to={"/forget"}
              >
                Forget password!
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-600 font-serif text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {!isClicked ? (
              "Login"
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
}

export default Login;
