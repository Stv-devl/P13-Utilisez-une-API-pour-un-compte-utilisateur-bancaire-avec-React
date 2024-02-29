import { userLogout } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("Token");
    setIsLogin(false);
    navigate("/signin");
  };

  return (
    <>
      <button className="main-nav-item" onClick={handleLogout}>
        Sign Out
      </button>
    </>
  );
};

export default Logout;
