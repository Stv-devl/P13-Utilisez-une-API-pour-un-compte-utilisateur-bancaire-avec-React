import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

/**
 * The Component return children if the user is authenticated, otherwise redirects to the login page.
 * @param {JSX.Element} children - The components to render if authenticated.
 * @returns {JSX.Element} - The children if authenticated, or navigate to the login page.
 */

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
