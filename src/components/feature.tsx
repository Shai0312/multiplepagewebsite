import Image from "next/image"
export default function Feature(){
    return(
        <div className="bg-white font-sans">
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center">
          <h2 className="text-4xl mt-16 font-bold text-amber-900 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">Our Featured Delights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/best-chocolate-layer-cake-square-35-720x720.jpg"  alt="chocolate cake" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Cake Creations</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Indulge in the rich, decadent flavor of our chocolate cakes. Perfect for any occasion, these cakes are moist, rich, and bursting with chocolate goodness.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/157877-vanilla-cupcakes-ddmfs-2X1-0399-1b671dfd598548b1b0339076d062a758.jpg" alt="cup cake" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Sweet Delights</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm"> Bite-sized pieces of heaven! Our cupcakes are perfect for any celebration, with a variety of flavors and toppings that will make your day extra special.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/pexels-photo-4099128.webp" alt="strawberry cupcake" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Tasty Cake Varieties</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Start your day with our freshly baked muffins! Soft, fluffy, and available in many flavors like blueberry, banana, and chocolate chip.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/pexels-photo-1291712.jpeg" alt="Blog Post 3" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Our Signature Cakes</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">A refreshing twist on the classic cake. Topped with fresh seasonal fruits, our Fruit Fiesta Cake is a delightful treat for fruit lovers.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/pexels-photo-3094471.jpeg" alt="Blog Post 3" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Brownie Bliss</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm"> Rich, fudgy, and perfectly chewy! Our brownies are a chocolate lover &apos;s dream, offering a dense, indulgent bite in every square.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
            <Image src="/pexels-photo-3012214.jpeg" alt="Blog Post 3" height={384} width={1000} className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <h3 className="text-xl font-bold text-gray-800">Custom Cake Creations</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">For those unique occasions, our special cakes are designed to impress. Customized to your needs, each cake is a masterpiece of flavor and design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}