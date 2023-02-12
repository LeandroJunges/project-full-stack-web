import { useNavigate } from "react-router-dom";
import { HeaderDash } from "./styles";

function HeaderDashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <HeaderDash>
      <h1>My Schedule </h1>
      <button onClick={logout}>Sair</button>
    </HeaderDash>
  );
}
export default HeaderDashboard;