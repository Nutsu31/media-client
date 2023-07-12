import { Outlet, Navigate } from "react-router-dom";

export default function PrivateCart() {
  const currentUser = JSON.parse(localStorage.getItem("jwt") || "null");

  return currentUser !== null ? <Outlet /> : <Navigate to="/" />;
}
