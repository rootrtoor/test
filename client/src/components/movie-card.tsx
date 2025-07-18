import { Movie } from "@shared/schema";

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div className="retro-card p-4 text-center" onClick={onClick}>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-48 object-cover border-2 border-white mb-3"
      />
      <div className="text-yellow-400 font-bold text-lg mb-1" style={{ textShadow: '1px 1px 0px #000000' }}>
        {movie.title}
      </div>
      <div className="text-cyan-400 text-sm">
        {movie.year}
      </div>
    </div>
  );
}
