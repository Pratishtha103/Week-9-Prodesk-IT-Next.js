import MovieDetails from "@/components/MovieDetails";
import { fetchMovieDetails } from "@/services/tmdb";

export async function generateMetadata({ params }) {

  const resolvedParams = await params;

  const movie = await fetchMovieDetails(
    resolvedParams.id
  );

  return {
    title: movie?.title || "Movie",
    description:
      movie?.overview || "Movie details",
  };
}

export default async function MoviePage({
  params,
}) {

  const resolvedParams = await params;

  const movie = await fetchMovieDetails(
    resolvedParams.id
  );

  return (
    <MovieDetails movie={movie} />
  );
}