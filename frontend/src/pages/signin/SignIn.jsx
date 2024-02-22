import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../actions/login.action";

const SignIn = () => {
  const { login, loading, error } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();

  const form = useRef();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = form.current[0].value;
    const password = form.current[1].value;

    dispatch(postLogin(email, password));

    login && navigate("/dashboard");
  };
  //validation du formulaire (message erreur + succes)
  //securiser la connection (localStorage ou cookies?)
  //gerer le "remember me" dans local storage
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form ref={form} onSubmit={handleSignIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="sign-in-button"
            disabled={loading}
          />
        </form>
      </section>
    </main>
  );
};

export default SignIn;
