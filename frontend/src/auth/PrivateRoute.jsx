import { Navigate } from "react-router-dom";
import { useIsAuth } from "./useIsAuth";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuth();
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
