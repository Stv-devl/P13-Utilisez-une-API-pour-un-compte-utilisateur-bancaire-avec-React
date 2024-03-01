import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import Header from "../../components/profil/Header";
import Account from "../../components/profil/Account";

const Dashboard = () => {
  const { loading, userData } = useSelector(({ userDatas }) => userDatas);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="main bg-dark">
          <Header datas={userData} />
          <Account datas={userData} />
        </main>
      )}
    </>
  );
};

export default Dashboard;
