import {render, screen} from '@testing-library/react';

import { fetchPopularMovies } from "./services/tmdb"; // the api to be mocked

import Home from './pages/Home';

//use jest.mock() to mock the api 
jest.mock('./services/tmdb',()=>({
    fetchPopularMovies : jest.fn(),
}));
//mocking the intersection observer to pretend infinite scroll
global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test("renders movies fetched from api",async ()=>{
    //write mock resolved value for when api is called
    fetchPopularMovies.mockResolvedValue({
        results: [
            {
                id: 1,
                title: "Burning Days",
                poster_path: "/test.jpg",
                vote_average: 9,
                release_date: "2022-01-01",
            },
            {
                id: 2,
                title: "Bliss",
                poster_path: "/test2.jpg",
                vote_average: 8,
                release_date: "2007-01-01",
            },
        ]
    });
    
    render(<Home initialMovies={[]}/>); //render component

    const movie = await screen.findByText("Burning Days"); //wait for movie to load
    expect(movie).toBeInTheDocument(); //check if movie appears
    expect(fetchPopularMovies).toHaveBeenCalled(); //check whether api called
});
