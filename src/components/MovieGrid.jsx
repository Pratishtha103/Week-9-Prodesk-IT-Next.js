"use client"

import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

function MovieGrid({ movies, favorites = [], setFavorites }) {
  function toggleFavorite(movie) {

    const updatedFavorites = favorites.some(
      (item) => item.id === movie.id
    )
      ? favorites.filter(
          (item) => item.id !== movie.id
        )
      : [...favorites, movie];

    setFavorites(updatedFavorites);

    // localStorage.setItem(
    //   "favorites",
    //   JSON.stringify(updatedFavorites)
    // );
  }
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-5
        p-5
      "
    >
      {movies?.map((movie) => {
        const isFavorite = favorites.some(
          (item) => item.id === movie.id
        );
        const imageUrl =
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return (
          <Link 
            href={`/movie/${movie.id}`} 
            key={movie.id}
          >
            <div
              className="
                rounded-xl
                overflow-hidden
                shadow-lg
                h-full
                flex
                flex-col
              bg-white
              text-black

              dark:bg-zinc-900
              dark:text-white
              "
            >
              <img
                src={imageUrl}
                alt={movie.title}
                className="block w-full h-112.5 object-cover"
              />
            <div className="p-3 flex flex-col flex-1">
              <div className=" flex justify-between items-center">
                <h3 className="text-lg font-semibold line-clamp-2">
                  {movie.title}
                </h3> 
                    <FavoriteButton
                      isFavorite={isFavorite}
                      onToggle={(e) => {
                        e.preventDefault();
                        toggleFavorite(movie);
                      }}
                    />
              </div>

                <p className="text-zinc-400">
                  {movie.release_date?.split("-")[0]}
                </p>

                <span className="text-yellow-400">
                  &#9733; {movie.vote_average?.toFixed(1)}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MovieGrid;