"use client"; // This is necessary for Next.js to treat the component as client-side rendered
import Image from 'next/image';
import { useState } from 'react';
import { Great_Vibes } from 'next/font/google';

// Define the ImageData interface to specify the structure of each image object
interface ImageData {
  src: string;
  alt: string;
}

// The Images array now uses the ImageData[] type to ensure each object follows the interface structure
const Images: ImageData[] = [
  {
    src: "/Overloaded-Chocolate-Cake.avif",
    alt: "Specialty Cakes"
  },
  {
    src: "/velvet-indulgence-decadent-red-velvet-delight-best-red-velvet-cake-picture_1020697-16365.avif",
    alt: "Classic Cakes"
  },
  {
    src: "/delicious-cake-with-berries-lemon_23-2150727499.avif",
    alt: "Seasonal Cakes"
  },
  {
    src: "/Mini-cake9-1.jpg",
    alt: "Custom Cakes"
  }
];

const greatFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
});

export default function Homesectionb() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Number of images per page
  const ImagesPerPage = 1;

  // Index of last image on the current page
  const indexOfLastImage = currentPage * ImagesPerPage;

  // Index of first image on the current page
  const indexOfFirstImage = indexOfLastImage - ImagesPerPage;

  // Get current images to display
  const currentImage = Images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Available Categories Heading with Border Below */}
      <h1 className="text-4xl text-pink-600 text-center font-semibold mt-12">
        Available Categories
      </h1>
      <div className="flex justify-center mt-2 mb-8">
        <div className="border-b-4 border-amber-600 w-60"></div> {/* Line below the heading */}
      </div>

      <div className="flex justify-around mt-12">
        {currentImage.map((image, index) => (
          <div key={index} className="text-center">
            {/* Full size circular image */}
            <Image
              className="w-64 h-64 rounded-full" // Circular and covers the container
              src={image.src}
              alt={image.alt}
              width={256} // Fixed width for optimization
              height={256} // Fixed height for optimization
            />
            <h2 className={`${greatFont.className} mt-3 text-4xl text-amber-600 font-bold`} style={{ fontWeight: "600" }}>
              {image.alt}
            </h2> {/* Display image name under it with amber-600 color and bold */}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-5">
          {/* Previous button */}
          <li
            className="flex items-center justify-center cursor-pointer bg-gray-100 w-10 h-10 rounded-full"
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-300" viewBox="0 0 55.753 55.753">
              <path
                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                data-original="#000000" />
            </svg>
          </li>

          {/* Page numbers */}
          {[1, 2, 3, 4].map((number) => (
            <li
              key={number}
              className={`flex items-center justify-center cursor-pointer text-base font-bold w-10 h-10 rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'text-[#333]'}`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}

          {/* Next button */}
          <li
            className="flex items-center justify-center cursor-pointer bg-gray-100 w-10 h-10 rounded-full"
            onClick={() => currentPage < 4 && paginate(currentPage + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-300 rotate-180" viewBox="0 0 55.753 55.753">
              <path
                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                data-original="#000000" />
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}
