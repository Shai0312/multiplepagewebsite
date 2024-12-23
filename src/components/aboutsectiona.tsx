import Image from "next/image";
export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pl-4 lg:pl-20 mt-20 bg-gradient-to-r from-pink-50 to-amber-50 p-6 lg:p-8 rounded-xl shadow-xl">
        {/* Image Section with top and bottom borders */}
        <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mb-6 lg:mb-0">
          <Image
            className="rounded-full w-full h-full object-cover shadow-lg border-t-8 border-b-8 border-amber-600 transform hover:scale-105 transition-all duration-300"
            src="/360_F_400734737_CXuxJirdrY6zUrm4C9jxQ6JA1Kui03A2.jpg"
            alt="girl making cake"
            width={1000}
            height={1000}
          />
        </div>

        {/* Text Section */}
        <div className="max-w-full lg:max-w-2xl space-y-6">
          <h1 className="text-3xl lg:text-5xl font-serif text-amber-950 font-bold tracking-wide text-shadow-md">
            About Cake Delight
          </h1>
          <p className="text-base lg:text-lg text-amber-600 font-serif leading-relaxed">
            Cake Delight creates beautiful, handcrafted cakes that make every
            occasion special. Using the finest ingredients, each cake is designed
            with care and made to impress. We &apos;re here to make your celebrations
            unforgettable with our delicious and stunning cakes. Cake Delight is a
            popular cake shop known for its wide variety of freshly baked cakes,
            pastries, and desserts. The shop offers a range of options, from classic
            cakes like chocolate and vanilla to more unique flavors like red velvet
            and fruit cakes. With a focus on quality ingredients and attention to
            detail, Cake Delight is a favorite choice for birthdays, weddings, and
            special occasions. Their cakes are known for their moist texture, rich
            flavor, and creative designs. Whether you &apos;re looking for a simple treat
            or an elaborate custom cake, Cake Delight promises a delightful experience
            for all cake lovers.
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-pink-600 to-amber-600 hover:from-pink-500 hover:to-amber-500 py-3 px-8 rounded-full shadow-xl text-white text-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <a href="/">Explore Now</a>
          </button>
        </div>
      </div>
    </>
  );
}
