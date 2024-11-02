import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Regester from "./pages/Auth/Register";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Main pages/Home";
import Brands from "./pages/Main pages/Brands";
import Category from "./pages/Main pages/Category";
import WhishList from "./pages/Icons/WhishList";
import Login from "./pages/Auth/Login";
import Products from "./pages/Main pages/Products";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Verify from "./pages/Auth/Verify";
import ResetPassword from "./pages/Auth/ResetPassword";
import AuthContextProvider from "./Context/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./pages/Main pages/ProductDetails";
import { Offline } from "react-detect-offline";
import Cart from "./pages/Icons/Cart";
import ProtectedRouteAuth from "./components/ProtectedRouteAuth";
function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/signUp",
          element: (
            <ProtectedRouteAuth>
              <Regester />
            </ProtectedRouteAuth>
          ),
        },
        {
          path: "/signIn",
          element: (
            <ProtectedRouteAuth>
              {" "}
              <Login />
            </ProtectedRouteAuth>
          ),
        },
        {
          path: "/forget",
          element: (
            <ProtectedRouteAuth>
              <ForgetPassword />
            </ProtectedRouteAuth>
          ),
        },
        {
          path: "/verify",
          element: (
            <ProtectedRouteAuth>
              {" "}
              <Verify />
            </ProtectedRouteAuth>
          ),
        },
        {
          path: "/reset",
          element: (
            <ProtectedRouteAuth>
              {" "}
              <ResetPassword />
            </ProtectedRouteAuth>
          ),
        },
        { path: "*", element: <h2>404</h2> },
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/products",
          element: (
            <ProtectedRoute>
              <Products />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/productDetails/:id/:categoryId",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "/category",
          element: (
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          ),
        },
        {
          path: "/favourite",
          element: (
            <ProtectedRoute>
              <WhishList />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <Fragment>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Offline>
            <div className="bg-black text-white text-center fixed top-[15vh] left-5 rounded-2xl p-3">
              Internet connection lost!
            </div>
          </Offline>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
