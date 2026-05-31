import NavBar from "@/components/NavBar";
import { fetchMovieDetails } from "@/services/tmdb";

export async function generateMetadata({ params }) {

  const resolvedParams = await params;

  const movie = await fetchMovieDetails(resolvedParams.id);

  return {
    title: movie?.title || "Movie",
    description: movie?.overview || "Movie details",
  };
}
export default async function MoviePage({params}){
    const resolvedParams= await params;
    const movie = await fetchMovieDetails(resolvedParams.id);
    if (!movie) {
        return (
            <div>
                <NavBar/>
                <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold">
                    Movie not found
                    </h1>

                    <p className="text-zinc-400 mt-2">
                    Failed to load movie details.
                    </p>
                </div>
            </div>
        );
    }

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return(
        <div>
            <NavBar/>
            <div className="p-6 text-white">
                <img
                    src={imageUrl}
                    alt={movie.title}
                    className="w-50 rounded-xl"
                />

                <h1 className="text-4xl font-bold mt-4">
                    {movie.title}
                </h1>

                <p className="mt-4 text-zinc-300">
                    {movie.overview}
                </p>

                <p className="mt-2">
                    &#9733; {movie.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    ); 
}