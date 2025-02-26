
import { useEffect, useState } from "react";

type Movie = {
  title: string;
  description: string;
  productionYear: number;
  director: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("Ingen giltig token!");
        return;
      }
      try {
        const response = await fetch("http://localhost:8080/movies", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            "Kunde inte hämta filmer. Kontrollera att du har rätt behörighet."
          );
        }

        const data: Movie[] = await response.json();
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Filmlista</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.productionYear}) - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
