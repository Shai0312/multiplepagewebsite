import { Great_Vibes } from "next/font/google";

// Load the Great Vibes font
const msFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Homesectiona() {
  return (
    <div className="relative bg-[url('/front.webp')] h-[300px] md:h-96 w-full bg-cover bg-center">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-50 backdrop-blur-sm"></div>

      <div className="flex flex-col md:flex-row m-6 md:m-16 p-6 md:p-10 relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif font-semibold mt-2 text-white">
            Delicious Cakes for <br /> every occasion
          </h1>
          <p className={`${msFont.className} text-white text-2xl md:text-4xl font-serif text-center md:text-left mt-6`}>
            Made with love, using the freshest <br /> ingredients for a truly unforgettable taste!
          </p>
          <button
            type="button"
            className="bg-pink-600 hover:bg-pink-400 py-2.5 px-6 ml-0  md:ml-44 mt-4 md:mt-6 min-w-[140px] md:min-w-[180px] shadow-xl rounded-full text-white text-xl tracking-wider font-medium font-serif border-none outline-none active:shadow-inner"
          >
            <a href="/products">Search Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}
