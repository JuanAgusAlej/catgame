import React from "react";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";

import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import News from "./pages/News";
import Password from "./pages/Password";
import Error404 from "./pages/Error404";
import Feed from "./pages/Feed";
import LoginScreen from "./pages/LoginSreen";
import Perfil from "./pages/Perfil";
import RegScreen from "./pages/RegScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<LoginScreen />} />
				<Route
					path="/"
					element={
						<ProtectedRoutes>
							<Feed />
						</ProtectedRoutes>
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
				<Route path="regScreen" element={<RegScreen />} />
				<Route path="password" element={<Password />} />
				<Route path="noticias" element={<News />} />
				<Route path="loading" element={<Loading />} />
        		<Route path="comments" element={<Comments />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
