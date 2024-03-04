import { useSelector } from "react-redux";
import decryptedToken from "./deCrypted";

export const useAuth = () => {
  const { token } = useSelector(({ auth }) => auth);
  const rememberUser = localStorage.getItem("Token");
  const deCryptToken = decryptedToken(rememberUser);
  const isAuthenticated = token || deCryptToken;
  return isAuthenticated;
};
