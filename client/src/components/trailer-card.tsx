import { Trailer } from "@shared/schema";

interface TrailerCardProps {
  trailer: Trailer;
  onClick?: () => void;
}

export default function TrailerCard({ trailer, onClick }: TrailerCardProps) {
  return (
    <div className="bg-blue-900 border-2 border-cyan-400 p-4 text-center">
      <div className="trailer-thumb" onClick={onClick}>
        <span className="play-button">▶️</span>
      </div>
      <div className="text-yellow-400 font-bold text-lg mb-1" style={{ textShadow: '1px 1px 0px #000000' }}>
        {trailer.title}
      </div>
      <div className="text-cyan-400 text-sm">
        Duration: {trailer.duration}
      </div>
    </div>
  );
}
