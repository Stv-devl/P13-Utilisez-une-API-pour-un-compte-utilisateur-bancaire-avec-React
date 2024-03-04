import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import Header from "../../components/profil/Header";
import Account from "../../components/profil/Account";
import { useAuth } from "../../auth/useAuth";
import { userVerification } from "../../features/userSlice";

const Dashboard = () => {
  const { loading, userData } = useSelector(({ userDatas }) => userDatas);
  const isAuthenticated = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userVerification(isAuthenticated));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      {loading || !userData ? (
        <Loading />
      ) : (
        <main className="main bg-dark">
          <Header datas={userData} isAuthenticated={isAuthenticated} />
          <Account datas={userData} />
        </main>
      )}
    </>
  );
};

export default Dashboard;
