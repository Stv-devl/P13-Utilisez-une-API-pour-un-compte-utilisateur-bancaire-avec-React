import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/loginService";

const SignIn = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = form.current[0].value;
    const password = form.current[1].value;

    try {
      const response = await loginService(email, password);
      console.log("Réponse de l'authentification:", response);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error.message);
    }
  };
  //securiser la connection
  //gerer le remember me dans local storage
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
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
};

export default SignIn;
