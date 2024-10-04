import { NavLink } from "react-router-dom"; // Mengimpor NavLink
import React from "react";
import Logo from "../assets/logo.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import SearchInput from "../SearchInput.jsx";
import Filter from "../Filter.jsx";

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
      <Navbar isBordered shouldHideOnScroll className="w-full">
        <NavbarContent>
          <NavbarContent></NavbarContent>
          <NavbarContent>
            <NavbarBrand className="flex justify-center">
              <img src={Logo} className="w-8 h-8" alt="Logo" />
              <p className="font-bold text-inherit mx-2">Redux News</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="center">
            <SearchInput fetchNews={fetchNews} />
            <Filter />
          </NavbarContent>
        </NavbarContent>
      </Navbar>

      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarContent
            justify="center"
            className="hidden sm:flex gap-5 w-full"
          >
            {/* Menu Utama */}
            {menuItems.map((item) => (
              <NavbarItem
                className="flex h-full items-center justify-center text-center"
                key={item.name}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 font-semibold flex items-center border-b-3 border-blue-900 h-full"
                      : "text-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              </NavbarItem>
            ))}
          </NavbarContent>
        </NavbarContent>

        <NavbarMenu className="px-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`} className="my-2">
              <div className="w-full shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-blue-900 font-bold flex items-center border-l-3 border-blue-900 "
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  to={item.path}
                  size="lg"
                >
                  <div className="flex items-center px-4 py-2">{item.name}</div>
                </NavLink>
              </div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex justify-center">
            <img src={Logo} className="w-8 h-8" alt="Logo" />
            <p className="font-bold text-inherit mx-2">Redux News</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex">
          <NavbarContent
            justify="center"
            className="hidden sm:flex gap-5 w-full"
          >
            {/* Menu Utama */}
            {menuItems.map((item) => (
              <NavbarItem
                className="flex h-full items-center justify-center text-center"
                key={item.name}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-900 font-semibold flex items-center border-b-3 border-blue-900 h-full"
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
          <Filter />
        </NavbarContent>

        <NavbarMenu className="px-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`} className="my-2">
              <div className="w-full shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-100 text-blue-900 font-bold flex items-center border-l-3 border-blue-900 "
                      : "text-gray-700 hover:bg-gray-50"
                  }
                  to={item.path}
                  size="lg"
                >
                  <div className="flex items-center px-4 py-2">{item.name}</div>
                </NavLink>
              </div>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
