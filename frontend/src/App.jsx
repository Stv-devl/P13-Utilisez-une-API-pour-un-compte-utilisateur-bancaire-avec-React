import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./components/error/Error";
import Dashboard from "./pages/dashboard/Dashboard";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
