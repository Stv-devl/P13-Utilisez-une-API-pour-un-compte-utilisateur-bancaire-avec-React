import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
