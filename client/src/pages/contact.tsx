import RetroLayout from "@/components/retro-layout";

export default function Contact() {
  return (
    <RetroLayout>
      <div className="retro-section">
        <div className="retro-section-header">📞 GET IN TOUCH! 📞</div>
        <div className="text-center">
          <p className="text-cyan-400 text-lg mb-5">
            <span className="blink-animation">📧</span> Contact us for showtimes and special events! <span className="blink-animation">📧</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-purple-900 border-2 border-yellow-400 p-6">
              <strong className="text-yellow-400 text-lg block mb-3">📍 Address</strong>
              <p>123 Movie Street<br />
              Cinema City, CC 12345</p>
            </div>
            
            <div className="bg-purple-900 border-2 border-yellow-400 p-6">
              <strong className="text-yellow-400 text-lg block mb-3">📞 Phone</strong>
              <p>(555) 123-MOVIE<br />
              (555) 123-6684</p>
            </div>
          </div>
          
          <div className="bg-black border-2 border-cyan-400 p-6 mb-8">
            <strong className="text-yellow-400 text-lg block mb-3">⏰ Hours</strong>
            <p>Mon-Thu: 12:00 PM - 11:00 PM<br />
            Fri-Sat: 12:00 PM - 1:00 AM<br />
            Sunday: 1:00 PM - 10:00 PM</p>
          </div>
          
          <div className="space-y-4">
            <a href="mailto:info@retroflixcinema.com" className="retro-button">
              📧 EMAIL US!
            </a>
            <a href="tel:5551236684" className="retro-button ml-4">
              📞 CALL NOW!
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900 to-blue-900 border-2 border-pink-400">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">🌟 VIP MEMBERSHIP 🌟</h3>
            <p className="mb-4">Join our exclusive VIP club and get:</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>✨ Early access to new releases</li>
              <li>🎫 Discounted ticket prices</li>
              <li>🍿 Free popcorn on Tuesdays</li>
              <li>📧 Exclusive event invitations</li>
              <li>🎁 Birthday surprises</li>
            </ul>
            <button className="retro-button mt-4">
              🚀 JOIN VIP CLUB!
            </button>
          </div>
        </div>
      </div>
    </RetroLayout>
  );
}
