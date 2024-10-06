import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchInput from "./SearchInput.jsx";
import Filter from "./Filter.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Nav({ fetchNews }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(window.innerWidth < 640); // Set initial value based on window size

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Indonesia", path: "/indonesia" },
    { name: "Programming", path: "/programming" },
    { name: "Saved", path: "/saved" },
  ];

  // deteksi scroll & ukuran windows
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640 || window.scrollY > 0) {
        setShowNavbar(true); // Tampilkan <Navbar> kalo scroll atau ukuran layar sm
      } else {
        setShowNavbar(false); // Sembunyikan <Navbar> dan tampilkan <nav> kalo posisi atas
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Update on resize
    handleScroll(); // Call the function to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {!showNavbar && (
        <nav className="hidden sm:block bg-white shadow-md w-full">
          <div className="flex items-center justify-center h-16">
            <div className="w-1/2 flex items-center justify-center"></div>
            <div className="flex items-center">
              <img src={Logo} className="w-8 h-8" alt="Logo" />
              
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
                      ? " font-bold flex items-center border-b-3 border-[#17b384] h-16"
                      : "text-gray-700 flex items-center "
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <hr className="border-2 border-black" />
        </nav>
      )}

      {showNavbar && (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand className="flex justify-center">
              <div className="h-8 w-8">
              <img src={Logo} className="w-8 h-8" alt="Logo" />

              </div>
             
             
              
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="flex">
            <NavbarContent
              justify="center"
              className="hidden sm:flex gap-5 w-full"
            >
              {menuItems.map((item) => (
                <NavbarItem
                  className="flex h-full items-center justify-center text-center"
                  key={item.name}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold flex items-center border-b-3 border-[#17b384] h-full"
                        : "text-gray-700"
                    }
                  >
                    {item.name}
                  </NavLink>
                </NavbarItem>
              ))}
            </NavbarContent>
          </NavbarContent>

          <NavbarContent justify="center">
            <SearchInput fetchNews={fetchNews} />
            <div>
            <Filter />
            </div>
            
          </NavbarContent>

          <NavbarMenu className="px-4">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`} className="my-2">
                <div className="w-full shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-gray-100 font-bold flex items-center border-l-3 border-[#17CF97]"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                    to={item.path}
                    size="lg"
                  >
                    <div className="flex items-center px-4 py-2">
                      {item.name}
                    </div>
                  </NavLink>
                </div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
}
