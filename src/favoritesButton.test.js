import { render, screen } from "@testing-library/react";

import MovieGrid from "./components/MovieGrid";

test("renders 'Add to Favorite' button", () => {
    //mock movie to check button render
    const mockMovie = {
        id: 1,
        title : 'Burning Days',
        poster_path: "/test.jpg",
        release_date: "2022-05-23",
        vote_average: 9,
    };
    //render MovieGrid with mock movie
    render(
        <MovieGrid
        movies={[mockMovie]}
        favorites={[]}
        setFavorites={() => {}}
        />
    );
    //check buttons render by text
    expect(
        screen.getByText("♡")
    ).toBeInTheDocument();
});