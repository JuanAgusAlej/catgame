import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
	const isAuth = JSON.parse(localStorage.getItem("auth")) || null;

	return <>{isAuth ? children : <Navigate to="login" />}</>;
};

export default ProtectedRoutes;
