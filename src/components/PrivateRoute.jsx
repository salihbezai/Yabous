// src/components/PrivateRoute.js
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  console.log("loaidng is " + loading);
  if (loading) return <LoadingSpinner />;

  // Redirect to login if not logged in
  return accessToken ? children : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
