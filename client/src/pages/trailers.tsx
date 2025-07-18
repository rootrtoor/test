import RetroLayout from "@/components/retro-layout";
import TrailerCard from "@/components/trailer-card";
import { useQuery } from "@tanstack/react-query";
import { Trailer } from "@shared/schema";
import { StaticClient } from "@/lib/staticClient";

export default function Trailers() {
  const { data: trailers = [], isLoading } = useQuery<Trailer[]>({
    queryKey: ['trailers'],
    queryFn: StaticClient.getTrailers,
  });

  if (isLoading) {
    return (
      <RetroLayout>
        <div className="text-center text-cyan-400 text-xl">Loading trailers...</div>
      </RetroLayout>
    );
  }

  return (
    <RetroLayout>
      <div className="trailer-section">
        <div className="retro-section-header">📹 EXCLUSIVE TRAILERS 📹</div>
        <div className="trailer-grid">
          {trailers.map((trailer) => (
            <TrailerCard
              key={trailer.id}
              trailer={trailer}
              onClick={() => {
                if (trailer.videoUrl) {
                  window.open(trailer.videoUrl, '_blank');
                } else {
                  alert(`Trailer for ${trailer.title} coming soon!`);
                }
              }}
            />
          ))}
        </div>
      </div>
    </RetroLayout>
  );
}
