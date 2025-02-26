import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const server = setupServer(
  http.get("http://localhost:8080/movies", async ({ request }) => {
    const token = request.headers.get("Authorization");

    if (!token || token !== "Bearer mock-token") {
      return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return HttpResponse.json([], { status: 200 });
  })
);
