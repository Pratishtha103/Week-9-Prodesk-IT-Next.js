"use client"

import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";
import NavBar from "@/components/NavBar";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(stored);
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites, loaded]);

  if (favorites.length === 0) {
    return (
      <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center h-64 text-zinc-400 gap-2">
          <p className="text-lg">No movie added to favorites.</p>
          <p className="text-sm">Tap the ♡ icon to favorite a movie.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar/>
      <MovieGrid
        movies={favorites}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}