import { render, screen, fireEvent } from "@testing-library/react";

import MovieGrid from "./components/MovieGrid";

test('favorite button responds to click',()=>{
    const mockMovie = {
        id: 1,
        title : 'Burning Days',
        poster_path: "/test.jpg",
        release_date: "2022-05-23",
        vote_average: 9,
    };
    const setFavorites = jest.fn();

    render(
        <MovieGrid
            movies={[mockMovie]}
            favorites={[]}
            setFavorites={setFavorites}
        />
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    
    expect(setFavorites).toHaveBeenCalled();

});