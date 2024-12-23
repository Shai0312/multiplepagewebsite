import { Great_Vibes } from 'next/font/google';

const nextFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-pink-600 py-12 px-4 font-sans tracking-wide mt-20">
      <div className="text-center">
        <h6 className="text-xl text-pink-600 font-semibold">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
          {/* Facebook Icon */}
          <li>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
              </svg>
            </a>
          </li>
           {/* LinkedIn Icon */}
           <li>
            <a href='https://www.linkedin.com/yourpage'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                <circle cx="56.098" cy="56.097" r="56.098" fill="#1c86ee" />
                <path fill="#ffffff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" />
              </svg>
            </a>
          </li>


          {/* Instagram Icon */}
          <li>
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fae100" />
                  <stop offset=".15" stopColor="#fcb720" />
                  <stop offset=".3" stopColor="#ff7950" />
                  <stop offset=".5" stopColor="#ff1c74" />
                  <stop offset="1" stopColor="#6c1cd1" />
                </linearGradient>
                <g data-name="Layer 2">
                  <g data-name="03.Instagram">
                    <rect width="152" height="152" fill="url(#a)" rx="76" />
                    <g fill="#fff">
                      <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" />
                      <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" />
                      <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>

          {/* Twitter Icon */}
          <li>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="15" fill="#1c86ee" />
                <path fill="white" d="M23.32 8.16c-.81.36-1.68.6-2.59.71.93-.56 1.64-1.44 1.97-2.5-.87.51-1.84.88-2.86 1.08-.82-.87-1.98-1.42-3.27-1.42-2.48 0-4.49 2.02-4.49 4.5 0 .35.04.69.11 1.02-3.73-.19-7.04-1.97-9.25-4.68-.39.67-.61 1.44-.61 2.26 0 1.56.8 2.93 2.02 3.73-.74-.02-1.44-.23-2.05-.57v.06c0 2.18 1.55 4.01 3.61 4.43-.38.1-.78.15-1.19.15-.29 0-.57-.03-.86-.08.57 1.78 2.23 3.07 4.19 3.1-1.54 1.21-3.47 1.93-5.57 1.93-.36 0-.71-.02-1.06-.06 1.98 1.27 4.34 2.01 6.86 2.01 8.22 0 12.73-6.81 12.73-12.7 0-.19-.01-.38-.02-.57.87-.63 1.64-1.42 2.24-2.33z" />
              </svg>
            </a>
          </li>
         

        </ul>

        <p className="text-xl text-pink-600 font-semibold">© <span className={`${nextFont.className} text-pink-600 text-2xl`} style={{fontWeight:"700"}}>Cake Delight</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}
