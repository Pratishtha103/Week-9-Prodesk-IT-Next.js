import Home from "@/pages/Home";
import {fetchPopularMovies} from '@/services/tmdb';

export default async function Page() {
  const data = await fetchPopularMovies(1);
  return (
    <Home initialMovies={data.results}/>
  );
}