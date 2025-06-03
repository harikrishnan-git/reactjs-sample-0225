import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 999);
    axios
      .get(`https://picsum.photos/id/${randNum}/info`)
      .then(() => {
        const url = `https://picsum.photos/id/${randNum}/100/100`; // Smaller size
        setImageUrl(url);
      })
      .catch((err) => console.error("Failed to load image", err));
  }, []);

  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

          {/* ✅ Load image after URL is set */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Icon"
              className="rounded-full w-10 h-10 object-cover"
            />
          )}

          {/* Optional nav links */}
          <div className="hidden w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600"
                >
                  Home
                </a>
              </li>
              {/* Other links... */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
