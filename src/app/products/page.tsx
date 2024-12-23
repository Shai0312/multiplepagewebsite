"use client";
import { useState } from "react";
import Image from "next/image";

// Example product data
type IData = {
  title: string;
  description: string;
  Image: string;
  price: string; // Add price to each product
};

const data: IData[] = [
  { Image: "/cakechocolate.jpg", title: "Chocolate Cake", description: "Delicious chocolate cake", price: "$20.00" },
  { Image: "/pexels-photo-4099128.webp", title: "Cupcake", description: "Tasty cupcake", price: "$5.00" },
  { Image: "/pexels-photo-3776529.webp", title: "Muffins", description: "Soft muffins", price: "$10.00" },
  { Image: "/pexels-photo-140831.webp", title: "Fruit Fiesta Cake", description: "Cake with fresh fruits", price: "$25.00" },
  { Image: "/free-photo-of-cake-with-strawberries.jpeg", title: "Red Velvet Cake", description: "Rich and delicious", price: "$22.00" },
  { Image: "/pexels-photo-264939.jpeg", title: "Lemon Cake", description: "Zesty lemon cake", price: "$18.00" },
  { Image: "/pexels-photo-2323206.webp", title: "Strawberry cake", description: "Fresh strawberry shortcake", price: "$15.00" },
  { Image: "/pexels-photo-2612373.jpeg", title: "Carrot Cake", description: "Healthy carrot cake", price: "$20.00" },
  { Image: "/pexels-photo-1098592.webp", title: "Cheesecake", description: "Creamy cheesecake", price: "$30.00" },
  { Image: "/free-photo-of-a-piece-of-banana-cake-on-a-black-plate.jpeg", title: "Banana Cake", description: "Banana flavored cake", price: "$18.00" },
  { Image: "/free-photo-of-delicious-homemade-tiramisu-cake-with-raspberries.jpeg", title: "Coffee Cake", description: "Delicious coffee cake", price: "$17.00" },
  { Image: "/pexels-photo-13963474.jpeg", title: "Pineapple Cake", description: "Tropical pineapple cake", price: "$19.00" },
];

export default function Products() {
  const [cart, setCart] = useState<number[]>([]);

  // Add item to cart and prevent duplicates
  const addToCart = (index: number) => {
    setCart((prevCart) => {
      if (!prevCart.includes(index)) {
        return [...prevCart, index]; // Only add if not already in the cart
      }
      return prevCart; // Avoid duplicate cart items
    });
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {/* Cart Display */}
      <div className="text-right text-xl font-semibold">
        <p className="text-pink-600">
          Items in Cart: {cart.length}
        </p>
      </div>

      {/* Heading with bottom border */}
      <h1 className="text-4xl font-bold text-center text-amber-900 mt-12 ">
        Our Delicious Cake Products
      </h1>

      {/* Line under the heading with custom width */}
      <div className="w-80 border-b-4 border-amber-900 mx-auto mb-8 mt-2"></div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Product img */}
            <Image src={item.Image} alt={item.title} height={192} width={1000} className="w-full h-48 object-cover" />

            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-lg text-gray-600 my-2">{item.description}</p>
              <p className="text-xl font-bold text-pink-600">{item.price}</p>
              <button
                onClick={() => addToCart(index)}
                className="bg-pink-600 text-white py-2 px-6 rounded-full text-xl font-semibold hover:bg-pink-500 transition-all duration-300 mt-4"
                aria-label={`Add ${item.title} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Display items in the cart */}
      {cart.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">Your Cart</h2>
          <ul className="space-y-4">
            {cart.map((index) => {
              const item = data[index];
              return (
                <li key={index} className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-lg">{item.price}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
