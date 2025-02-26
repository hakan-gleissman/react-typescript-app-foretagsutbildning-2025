import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Ta bort token
    //localStorage.removeItem("token_exp"); // Ta bort expiration time (om du använder det)
    navigate("/"); // Skicka användaren tillbaka till inloggningssidan
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-4 w-100 text-center">Välkommen till Dashboard</h2>
      <Link to="/movies">Visa filmer</Link>
      <Link to="/register-movie">Registrera ny film</Link>
      <br />
      <br />
      <button className="btn btn-primary btn-s" onClick={handleLogout}>
        Logga ut
      </button>
    </div>
  );
};

export default Dashboard;
