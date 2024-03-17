import { useSelector } from "react-redux";

/**
 * A custom hook who check the store or the localStorage for know if the user is authenticated. If a token exists in the localStorage.
 * @returns {string} - If user is authenticated, its retourn the jwt token, if not its return undefinited
 */

export const useAuth = () => {
  const { token } = useSelector(({ auth }) => auth);
  const rememberUser = localStorage.getItem("Token");
  const isAuthenticated = token || rememberUser;
  return isAuthenticated;
};
