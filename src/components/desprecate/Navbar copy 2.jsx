import { NavLink } from "react-router-dom"; // Mengimpor NavLink
import React from "react";
import Logo from "../assets/logo.svg";
import SearchInput from "../SearchInput.jsx";
import Filter from "../Filter.jsx";

import { LockClosedIcon } from "@heroicons/react/24/outline";

export default function Nav({ fetchNews }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Indonesia", path: "/indonesia" },
    { name: "Programming", path: "/programming" },
    { name: "Saved", path: "/saved" },
  ];

  return (
    <>
      <div className="hidden sm:block bg-white shadow-md w-full">
        <nav className="bg-white shadow-md w-full">
          <div className="flex items-center justify-center py-2 ">
            <div className="w-1/2 flex items-center  justify-center"></div>
            <div className=" flex items-center ">
              <img src={Logo} className="w-8 h-8" alt="Logo" />
              <p className="font-bold text-gray-900 mx-2 text-nowrap">
                Redux News
              </p>
            </div>

            <div className="flex justify-center p-2 w-1/2 gap-3">
              <SearchInput fetchNews={fetchNews} />
              <Filter />
            </div>
          </div>
          <hr className="border-2 border-black" />

          <div className="flex items-center justify-center py-3 h-16">
            <div className="hidden sm:flex gap-5">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 font-semibold flex items-center border-b-3 border-blue-900 h-16  "
                      : "text-gray-700 flex items-center hover:text-blue-500"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="flex sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <LockClosedIcon /> : 3}
              </button>
            </div>
          </div>

          <hr className="border-2 border-black" />
        </nav>

        {/* Menu Dropdown untuk Mobile */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-md">
            {menuItems.map((item) => (
              <div className="flex gap-2">
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-900 font-bold items-center border-l-4 border-blue-900 p-2"
                      : "text-gray-700 hover:bg-gray-50 p-2"
                  }
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
