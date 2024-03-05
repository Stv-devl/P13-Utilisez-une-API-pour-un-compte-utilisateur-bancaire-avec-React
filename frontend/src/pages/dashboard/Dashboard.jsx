import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import Header from "../../components/profil/Header";
import Account from "../../components/profil/Account";
import { useAuth } from "../../auth/useAuth";
import { userVerification } from "../../features/userSlice";

/**
 * Dashboard component
 * Displays user information and account details.
 * @returns {JSX.Element} - The Dashboard component with conditional rendering based on loading state and authentication.
 */

const Dashboard = () => {
  const { loading, firstName, lastName } = useSelector(
    ({ userDatas }) => userDatas
  );
  const isAuthenticated = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userVerification(isAuthenticated));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main bg-dark">
          <Header
            firstName={firstName}
            lastName={lastName}
            isAuthenticated={isAuthenticated}
          />
          <Account />
        </main>
      )}
    </>
  );
};

export default Dashboard;
