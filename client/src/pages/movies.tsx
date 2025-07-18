import RetroLayout from "@/components/retro-layout";
import MovieCard from "@/components/movie-card";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@shared/schema";
import { StaticClient } from "@/lib/staticClient";

export default function Movies() {
  const { data: movies = [], isLoading } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: StaticClient.getMovies,
  });

  if (isLoading) {
    return (
      <RetroLayout>
        <div className="text-center text-cyan-400 text-xl">Loading movies...</div>
      </RetroLayout>
    );
  }

  return (
    <RetroLayout>
      <div className="retro-section">
        <div className="retro-section-header">🎬 ALL MOVIES 🎬</div>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => {
                // TODO: Navigate to movie details
                alert(`Movie details for ${movie.title} coming soon!`);
              }}
            />
          ))}
        </div>
      </div>
    </RetroLayout>
  );
}
