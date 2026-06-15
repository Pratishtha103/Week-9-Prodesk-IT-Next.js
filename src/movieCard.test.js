import {render, screen } from "@testing-library/react";

import MovieGrid from "./components/MovieGrid";

test('renders movie card', ()=>{
    const mockMovie = {
        id: 1,
        title : 'Burning Days',
        poster_path: "/test.jpg",
        release_date: "2022-05-23",
        vote_average: 9,
    };
    render(
        <MovieGrid 
            movies={[mockMovie]}
            favorites={[]}
            setFavorites={()=>{}}
        />
    );
    expect(
        screen.getByText('Burning Days')
    ).toBeInTheDocument();
});