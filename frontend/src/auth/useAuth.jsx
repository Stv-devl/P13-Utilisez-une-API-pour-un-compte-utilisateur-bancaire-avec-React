import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decryptedToken from "./deCrypted";
import { userVerification } from "../features/userSlice";

export const useAuth = () => {
  const { token } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const rememberUser = localStorage.getItem("Token");
  const deCryptToken = decryptedToken(rememberUser);
  const isAuthenticated = token || deCryptToken;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userVerification(isAuthenticated));
    }
  }, [isAuthenticated]);

  return isAuthenticated;
};
