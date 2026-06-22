const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";


export async function fetchPopularMovies(page = 1) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    // console.log(response.status);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("TMDB ERROR:", error);
    throw error;
  }
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  if (!response.ok) {
    throw new Error("Search failed");
  }

  return response.json();
}

export async function fetchMovieDetails(id){
  const response= await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

   if (!response.ok) {
    return null;
  }

  return response.json();
}