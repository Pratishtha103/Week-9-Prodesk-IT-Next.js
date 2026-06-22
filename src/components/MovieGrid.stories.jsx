import MovieGrid from "./MovieGrid";

const sampleMovies = [
    {
    id: 1,
    title: "Interstellar",
    release_date: "2014-11-07",
    vote_average: 8.7,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Inception",
    release_date: "2010-07-16",
    vote_average: 8.8,
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
]

export default {
  title: "TMDB/MovieGrid",
  component: MovieGrid,
  
};

export const Default = {
    args: {
        movies:sampleMovies,
        favorites: [],
        setFavorites: ()=>{},
    },
};

export const WithFavorites = {
    args:{
        movies:sampleMovies,
        favorites: [sampleMovies[0]],
        setFavorites: ()=>{},
    },
};

export const Empty = {
    args:{
        movies: [],
        Favorites: [],
        setFavorites: ()=>{},
    },
};