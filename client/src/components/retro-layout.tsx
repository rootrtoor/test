import { Link, useLocation } from "wouter";
import Starfield from "./starfield";
import Marquee from "./marquee";

interface RetroLayoutProps {
  children: React.ReactNode;
}

export default function RetroLayout({ children }: RetroLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "🏠 HOME", id: "home" },
    { href: "/movies", label: "🎬 MOVIES", id: "movies" },
    { href: "/trailers", label: "📹 TRAILERS", id: "trailers" },
    { href: "/about", label: "ℹ️ ABOUT", id: "about" },
    { href: "/contact", label: "📧 CONTACT", id: "contact" }
  ];

  return (
    <div className="min-h-screen relative">
      <Starfield />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="retro-header">
          <div className="retro-logo retro-font">★ RETROFLIX CINEMA ★</div>
          <div className="retro-tagline">Your Ultimate Movie Experience Since 1999!</div>
        </div>
        
        {/* Navigation */}
        <div className="retro-navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`retro-button mx-2 ${location === item.href ? 'bg-green-500' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Marquee News */}
        <Marquee>
          🎬 LATEST NEWS: New blockbuster releases every Friday! • Special midnight screenings available • Student discounts on Tuesdays • VIP membership now available! 🎬
        </Marquee>
        
        {/* Main Content */}
        {children}
        
        {/* Footer */}
        <div className="bg-black border-2 border-cyan-400 text-center p-5 mt-5 text-cyan-400">
          <div className="visitor-counter">
            VISITORS: 001,337 <span className="blink-animation">●</span>
          </div>
          <div className="visitor-counter">
            LAST UPDATED: 12/15/2001
          </div>
          <br />
          <p className="mt-2 text-yellow-400">
            © 2001 RetroFlix Cinema - All Rights Reserved
          </p>
          <p className="text-xs text-cyan-400">
            Best viewed in Internet Explorer 5.0 or Netscape Navigator 4.0+
          </p>
          <p className="text-xs text-cyan-400">
            Optimized for 800x600 resolution
          </p>
          
          <div className="mt-5">
            <span className="text-green-400">●</span>
            <span className="text-yellow-400">●</span>
            <span className="text-pink-400">●</span>
            <span className="text-cyan-400">●</span>
            <span className="text-orange-400">●</span>
          </div>
        </div>
      </div>
    </div>
  );
}
