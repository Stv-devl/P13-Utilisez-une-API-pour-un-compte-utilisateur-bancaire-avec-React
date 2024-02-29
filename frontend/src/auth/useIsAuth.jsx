import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useIsAuth = () => {
  const { token } = useSelector(({ auth }) => auth);
  const rememberUser = localStorage.getItem("Token");

  const [isAuthenticated, setIsAuthenticated] = useState(token || rememberUser);

  useEffect(() => {
    const isAuthenticated = token || rememberUser;
    setIsAuthenticated(isAuthenticated);
  }, [token, rememberUser]);

  return isAuthenticated;
};
