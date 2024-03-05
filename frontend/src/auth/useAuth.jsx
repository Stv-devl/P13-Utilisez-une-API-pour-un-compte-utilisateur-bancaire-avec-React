import { useSelector } from "react-redux";
import decryptedToken from "./deCrypted";

/**
 * A custom hook who check the store or the localStorage for know if the user is authenticated. If a token exists in the localStorage it will be decrypted.
 * @returns {string} - If user is authenticated, its retourn the jwt token, if not its return null
 */

export const useAuth = () => {
  const { token } = useSelector(({ auth }) => auth);
  const rememberUser = localStorage.getItem("Token");
  const deCryptToken = decryptedToken(rememberUser);
  const isAuthenticated = token || deCryptToken || null;
  return isAuthenticated;
};
