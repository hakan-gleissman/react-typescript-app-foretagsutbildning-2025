import { useState } from "react";

const RegisterMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    productionYear: "",
    director: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };
  //bibliotek för formulärhantering: https://react-hook-form.com/
  //schema-baserad validering: https://github.com/jquense/yup
  //eller: https://github.com/colinhacks/zod

  const handleRegisterMovie = async () => {
    // Kontrollera att inga textfält är tomma (trim tar bort extra blanksteg)
    if (
      movie.title.trim() === "" ||
      movie.description.trim() === "" ||
      movie.productionYear.trim() === "" ||
      movie.director.trim() === ""
    ) {
      setMessage("Alla fält måste fyllas i.");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Ingen giltig token hittades. Logga in igen.");
      return;
    }

    const payload = { ...movie, productionYear: Number(movie.productionYear) };

    try {
      const response = await fetch("http://localhost:8080/movies", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Kunde inte registrera filmen. Kontrollera att du har rätt behörighet.");
      }

      setMessage("Filmen registrerades framgångsrikt!");
      setMovie({ title: "", description: "", productionYear: "", director: "" });
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Registrera en film</h2>

        {message && <div className="alert alert-info text-center">{message}</div>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Titel"
            value={movie.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Beskrivning"
            value={movie.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="productionYear"
            placeholder="Produktionsår"
            value={movie.productionYear}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="director"
            placeholder="Regissör"
            value={movie.director}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleRegisterMovie}>
          Registrera film
        </button>
      </div>
    </div>
  );
};

export default RegisterMovie;
