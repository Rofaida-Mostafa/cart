import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  
  if (token) {
    return children;
  }
  return <Navigate to={"/signIn"} />;
};
export default ProtectedRoute;
