import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

/**
 * Login component
 * Display a form for user authentication. It allows the user to write their username and password, and checkbox for remember they are login.
 * On successful login, the user is redirected to the dashboard.
 * @returns {JSX.Element} - The Login component with a sign-in form.
 */

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  /**
   * Function to handle the sign-in process by dispatching the loginUser action with the provided credentials. On successful login, navigates the user to the dashboard.
   */
  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = { username, password, rememberMe };
    dispatch(loginUser(credentials)).then(() => {
      navigate("/profil");
    });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && (
            <span className="errorMessage">Incorrect username or password</span>
          )}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
      {loading && <Loading />}
    </main>
  );
};

export default Login;
