import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./pages/Home";
import { searchMovies, fetchPopularMovies } from "./services/tmdb";

jest.mock("./services/tmdb", () => ({
  fetchPopularMovies: jest.fn(),
  searchMovies: jest.fn(),
}));

global.IntersectionObserver = class {
  observe() {}
  disconnect() {}
  unobserve() {}
};

test("search displays fetched movies", async () => {
    fetchPopularMovies.mockResolvedValue({
        results: [],
    });
    
  searchMovies.mockResolvedValue({
    results: [
      {
        id: 1,
        title: "Burning Days",
        poster_path: "/test.jpg",
        release_date: "2022-01-01",
        vote_average: 9,
      },
    ],
  });

  render(<Home initialMovies={[]} />);

  const input = screen.getByRole("textbox");

  await userEvent.type(input, "Burning");

  expect(
    await screen.findByText("Burning Days")
  ).toBeInTheDocument();
});