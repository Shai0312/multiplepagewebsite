import Image from "next/image";
export default function DiscountBanner() {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-amber-600 text-white py-6 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-xl my-8">
      
      {/* Left Section (Text) */}
      <div className="max-w-lg mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide leading-snug">
          Special Offer: Get 20% Off Your First Order!
        </h2>
        <p className="text-base md:text-lg mb-6 font-medium opacity-90">
          Enjoy delicious cakes, cupcakes, and more at a special discount. Order now and treat yourself!
        </p>
        <a
          href="/products"
          className="bg-white text-pink-600 py-2.5 px-8 rounded-full text-lg md:text-xl font-semibold hover:bg-pink-200 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Shop Now
        </a>
      </div>
      
      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
        <Image src="/free-photo-of-wedding-cake-with-flowers.jpeg" 
          alt="Delicious Cake"
          width={1000} 
          height={500}
          className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}
