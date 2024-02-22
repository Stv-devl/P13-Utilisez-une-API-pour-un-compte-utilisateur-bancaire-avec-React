import { Link } from "react-router-dom";

/**
 * The component represent the horizontal nav on the top of the project .
 * @returns {JSX.Element} - The nav element containing the navigation bar with logo and link to SignIn.
 */

const Banner = () => {
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

      <div>
        <Link className="main-nav-item" to={`/signin`}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Banner;
