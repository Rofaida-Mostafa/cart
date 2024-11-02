import React, { Fragment, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import frimages from "../assets/img/images/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../Context/Auth";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { token, setToken } = authContext;
  const handleLogout = () => {
    localStorage.removeItem("tkn");
    setToken(null);
    navigate("/signIn"); // Navigate to login page after logout
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    /* */ / note */;
  };

  return (
    <Fragment>
      <nav className="fixed top-0 left-0 w-full bg-slate-500 shadow-lg z-50">
        {/* <div className="fixed top-0 z-50 w-full mb-[10vh] bg-slate-500">  */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
          <Link to={"/"} className="text-2xl font-bold">
            MyLogo
          </Link>
          {token? (
            <>
              <div
                className={`hidden space-x-4 md:flex ${
                  isMobileMenuOpen ? "" : "hidden"
                }`}
              >
                <NavLink to={"/"} className="block py-2">
                  Home
                </NavLink>
                <NavLink to={"/products"} className="block py-2">
                  Products
                </NavLink>
                <NavLink to={"/brands"} className="block py-2">
                  Brands
                </NavLink>
                <NavLink to={"/cart"} className="block py-2">
                  Cart
                </NavLink>
                <NavLink to={"/category"} className="block py-2">
                  Category{" "}
                </NavLink>
                <NavLink to={"favourite"} className="block py-2">
                  Wishlists
                </NavLink>
              </div>
              <div
                className={`hidden space-x-4 md:flex  bg-slate-100 px-2 rounded-lg ${
                  isMobileMenuOpen ? "" : "hidden"
                }`}
              >
                <Link to={"#"} className="text-blue-600 block py-2">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </Link>
                <Link to={"#"} className="text-blue-400 block py-2">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link to={"#"} className="text-pink-600 block py-2">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="space-x-4">
            {!token ? (
              <>
                <NavLink
                  to={"/signIn"}
                  onClick={""}
                  className="  px-4 py-2 rounded"
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/signUp"}
                  onClick={""}
                  className=" text-white px-4 py-2 rounded"
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <p
                onClick={handleLogout}
                className=" cursor-pointer text-white px-4 py-2 rounded hover:text-red-500"
              >
                Logout
              </p>
            )}
          </div>
          {/* Hamburger Icon (for mobile) */}
          <div className="md:hidden">
            {token ? (
              <button onClick={toggleMobileMenu} className="text-2xl">
                {isMobileMenuOpen ? (
                  <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {token ? (
          <>
            {isMobileMenuOpen && (
              <div className="md:hidden px-4 py-4 bg-white">
                <NavLink to={"/"} className="block py-2">
                  Home
                </NavLink>
                <NavLink to={"/products"} className="block py-2">
                  Products
                </NavLink>
                <NavLink to={"/brands"} className="block py-2">
                  Brands
                </NavLink>
                <NavLink to={"/cart"} className="block py-2">
                  Cart
                </NavLink>
                <NavLink to={"/category"} className="block py-2">
                  Category{" "}
                </NavLink>
                <NavLink to={"favourite"} className="block py-2">
                  Wishlists
                </NavLink>

                <div className="mt-4">
                  <Link to={"#"} className="text-blue-600 block py-2">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>{" "}
                    Facebook
                  </Link>
                  <Link to={"#"} className="text-blue-400 block py-2">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </Link>
                  <Link to={"#"} className="text-pink-600 block py-2">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </nav>
    </Fragment>
  );
};

export default Nav;
