import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import axios from "axios";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const Regester = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(null);
  const [isSuccesMessage, setSuccesMessage] = useState(null);
  const navigate = useNavigate();
  async function submitFunc(values) {
    setIsClicked(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((res) => {
        setSuccesMessage("Congratulations on the successful registration! 🎉");

        setTimeout((res) => {
          setSuccesMessage("null");
          navigate("/signIn");
        }, 2000);
        setIsClicked(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);

        setIsClicked(false);
        setTimeout((error) => {
          setErrorMessage(null);
        }, 2000);
      });
  }

  const regFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },

    onSubmit: submitFunc,
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required.").min(3).max(20),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required."),
      phone: yup
        .string()
        .required("password is required.")
        .matches(/^(02)?01[0125][0-9]{8}$/, "Phone must like 01111252345"),
      passord: yup
        .string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
          "Password must contain at least one capital letter and be at least 6 characters long."
        ),

      // password: yup
      //   .string()
      //   .required("password is required.")
      //   .min(6, "min must be 6 charac ")
      //   .max(12, "max must be 12 charac "),
      rePassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf(
          [yup.ref("password"), null],
          "Confirm password should be matches Password."
        ),
    }),
  });

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col items-center py-16 bg-gray-100 ">
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
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-700 pacifico-regular">
            Create an Account
          </h2>
          <form onSubmit={regFormik.handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                name="name"
                value={regFormik.values.name}
                onChange={regFormik.handleChange}
                onBlur={regFormik.handleBlur}
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
              {regFormik.errors.name && regFormik.touched.name ? (
                <div
                  className="p-3 mb-4 text-sm text-white rounded-lg bg-red-50 dark:bg-red-200 font-bold dark:text-gray-500"
                  role="alert"
                >
                  <span className="font-medium">{regFormik.errors.name}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                value={regFormik.values.email}
                onChange={regFormik.handleChange}
                onBlur={regFormik.handleBlur}
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {regFormik.errors.email && regFormik.touched.email ? (
                <div
                  className="p-3 mb-4 text-sm text-white rounded-lg bg-red-50 dark:bg-red-200 font-bold dark:text-gray-500"
                  role="alert"
                >
                  <span className="font-medium">{regFormik.errors.email}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* Phone */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                name="phone"
                value={regFormik.values.phone}
                onChange={regFormik.handleChange}
                onBlur={regFormik.handleBlur}
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone"
              />
              {regFormik.errors.phone && regFormik.touched.phone ? (
                <div
                  className="p-3 mb-4 text-sm text-white rounded-lg bg-red-50 dark:bg-red-200 font-bold dark:text-gray-500"
                  role="alert"
                >
                  <span className="font-medium">{regFormik.errors.phone}</span>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* Password */}
            <div className=" flex gap-5">
              {" "}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  value={regFormik.values.password}
                  onChange={regFormik.handleChange}
                  onBlur={regFormik.handleBlur}
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                {regFormik.errors.password && regFormik.touched.password ? (
                  <div
                    className="p-3 mb-4 text-sm text-white rounded-lg bg-red-50 dark:bg-red-200 font-bold dark:text-gray-500"
                    role="alert"
                  >
                    <span className="font-medium">
                      {regFormik.errors.password}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* Confirm Password */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="rePassword"
                >
                  Confirm Password
                </label>
                <input
                  name="rePassword"
                  value={regFormik.values.rePassword}
                  onChange={regFormik.handleChange}
                  onBlur={regFormik.handleBlur}
                  type="password"
                  id="rePassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />

                {regFormik.errors.rePassword && regFormik.touched.rePassword ? (
                  <div
                    className="p-3 mb-4 text-sm text-white rounded-lg bg-red-50 dark:bg-red-200 font-bold dark:text-gray-500"
                    role="alert"
                  >
                    <span className="font-medium">
                      {regFormik.errors.rePassword}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-slate-600 font-serif text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              {" "}
              {!isClicked ? (
                "Register"
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
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
      c
    </Fragment>
  );
};

export default Regester;
