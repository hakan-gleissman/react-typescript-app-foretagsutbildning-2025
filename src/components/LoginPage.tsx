import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/token-service/v1/request-token",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Felaktiga inloggningsuppgifter!");
      }

      const token = await response.text(); // Eftersom API:et returnerar en rå sträng
      localStorage.setItem("token", token); // Spara JWT-token
      console.log(token);
      navigate("/dashboard"); // Skicka användaren till dashboarden
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Logga in</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Användarnamn"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Lösenord"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Logga in
        </button>
      </div>
      {/* Visar username och password */}
      {/* <div className="text-left">
          user: {username} <br />
          pass: {password}
        </div>*/}
    </div>
  );
};

export default LoginPage;
