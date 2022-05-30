import React from "react";

import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import Password from "./pages/Password";
import Error404 from "./pages/Error404";
import Feed from "./pages/Feed";
import LoginScreen from "./pages/LoginSreen";
import Perfil from "./pages/Perfil";
import RegScreen from "./pages/RegScreen";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Comments from "./components/Comments";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            // <ProtectedRoutes>
            <Feed />
            // </ProtectedRoutes>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoutes>
              <Perfil />
            </ProtectedRoutes>
          }
        />
        <Route path="aboutus" element={<AboutUs />} />

        <Route path="admin" element={<Admin />} />
        <Route path="register" element={<RegScreen />} />
        <Route path="password" element={<Password />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<Error404 />} />
        <Route path="loading" element={<Loading />} />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
