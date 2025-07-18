import RetroLayout from "@/components/retro-layout";

export default function About() {
  return (
    <RetroLayout>
      <div className="retro-section">
        <div className="retro-section-header">🎪 ABOUT RETROFLIX CINEMA 🎪</div>
        <div className="text-center leading-relaxed">
          <p className="text-yellow-400 text-lg mb-5">
            Welcome to RetroFlix Cinema - Where every movie is an ADVENTURE! 🎬
          </p>
          <p className="mb-4">
            Established in 1999, we've been bringing you the HOTTEST movies and the COOLEST movie experience!
          </p>
          <p className="mb-4">
            Our state-of-the-art theater features the latest in sound technology and comfortable seating.
          </p>
          <p className="text-cyan-400 font-bold">
            Join our VIP club for exclusive previews and special discounts! 🌟
          </p>
          
          <div className="mt-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1489599899240-4bdb8ac1b8b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Vintage cinema equipment" 
              className="max-w-full h-auto border-4 border-white mx-auto glow-animation"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-purple-900 border-2 border-cyan-400 p-4">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">🎭 Premium Experience</h3>
              <p className="text-sm">Experience movies like never before with our cutting-edge technology!</p>
            </div>
            <div className="bg-purple-900 border-2 border-cyan-400 p-4">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">🍿 Concessions</h3>
              <p className="text-sm">Fresh popcorn, candy, and drinks available at our retro-themed concession stand!</p>
            </div>
            <div className="bg-purple-900 border-2 border-cyan-400 p-4">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">🎫 Special Events</h3>
              <p className="text-sm">Join us for midnight screenings, premieres, and special themed events!</p>
            </div>
          </div>
        </div>
      </div>
    </RetroLayout>
  );
}
