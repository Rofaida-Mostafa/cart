import React, { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import { Navigate } from "react-router-dom";

function ProtectedRouteAuth({ children }) {
  const { token } = useContext(AuthContext);

  return token ? <Navigate to="/"></Navigate> : children;
}

export default ProtectedRouteAuth;
