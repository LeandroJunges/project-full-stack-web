import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

function ProtectRoute() {
  const { newCustomer, loading } = useContext(LoginContext);
  if (loading) {
    return <div>Carregando...</div>;
  }

  return newCustomer ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectRoute