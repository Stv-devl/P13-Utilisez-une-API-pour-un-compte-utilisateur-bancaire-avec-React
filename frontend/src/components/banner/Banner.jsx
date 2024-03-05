import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

const Banner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useAuth();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(authStatus);
  }, [authStatus]);

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("Token");
    setIsLogin(false);
    navigate("/signin");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={`/home`}>
        <img
          className="main-nav-logo-image"
          src="./argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLogin ? (
        <div className="loginWrapper">
          <Link className="main-nav-logo" to={`/dashboard`}>
            <img
              className="user-avatar"
              src="./man-profil.png"
              alt="user profil"
            />
          </Link>
          <button className="loggout-btn" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to={`/signin`}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Banner;
