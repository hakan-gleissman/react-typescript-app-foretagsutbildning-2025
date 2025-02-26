import { render, screen, waitFor } from "@testing-library/react";
import MovieList from "../components/MovieList";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";
import "@testing-library/jest-dom";

// Modifiera API-responsen vid behov
server.use(
  http.get("http://localhost:8080/movies", async () =>
    HttpResponse.json([
      {
        title: "Interstellar",
        description: "A journey through space and time",
        productionYear: 2014,
        director: "Christopher Nolan",
      },
    ])
  )
);

test("visar filmer från API:et", async () => {
  localStorage.setItem("token", "mock-token");
  render(<MovieList />);

  // Vänta på att datan ska laddas och visas
  await waitFor(() => {
    expect(
      screen.getByText("Interstellar (2014) - Christopher Nolan")
    ).toBeInTheDocument();
  });
});
