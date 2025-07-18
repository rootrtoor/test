import RetroLayout from "@/components/retro-layout";
import MovieCard from "@/components/movie-card";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@shared/schema";
import { StaticClient } from "@/lib/staticClient";

export default function Home() {
  const { data: featuredMovies = [], isLoading } = useQuery<Movie[]>({
    queryKey: ['featured-movies'],
    queryFn: StaticClient.getFeaturedMovies,
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
      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-text">
          <span className="blink-animation">✨</span> WELCOME TO THE ULTIMATE MOVIE EXPERIENCE! <span className="blink-animation">✨</span>
          <br /><br />
          Step into a world where cinema comes alive!
        </div>
      </div>
      
      {/* Coming Soon Banner */}
      <div className="coming-soon">
        🔥 COMING SOON: EPIC BLOCKBUSTER PREMIERES! 🔥
      </div>
      
      {/* Featured Movies Section */}
      <div className="retro-section">
        <div className="retro-section-header">🎭 FEATURED MOVIES 🎭</div>
        <div className="movie-grid">
          {featuredMovies.map((movie) => (
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
