import { Link, useLocation } from "react-router-dom"; // Pastikan Anda mengimpor useLocation
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Card,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

import SearchInput from "./SearchInput.jsx";

export default function Nav({ fetchNews }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Menggunakan hook useLocation

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Indonesia", path: "/indonesia" },
    { name: "Programming", path: "/programming" },
    { name: "Saved", path: "/saved" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mr-4">
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit">News App</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3 ">
          {/* Menu Utama */}
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const menuActiveClass = isActive
              ? "text-blue-900 font-semibold border-b-2 border-blue-900 h-full"
              : "text-gray-700";
            return (
              <NavbarItem
                className=" flex h-full items-center"
                key={item.name}
                isActive={isActive}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-3  ${menuActiveClass}`}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </NavbarContent>

      <SearchInput fetchNews={fetchNews} />

      <NavbarMenu>
        {" "}
        {/* SideBar */}
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const menuActiveClass = isActive
            ? "border-l-3  border-[#1f308b]"
            : "text-gray-700";
          return (
            <NavbarMenuItem key={`${item.name}-${index}`} isActive={isActive}>
              <Card className="w-full shadow-sm rounded-lg">
                <Link
                  className={`flex items-center justify-center  px-3 py-2  ${menuActiveClass}`}
                  to={item.path}
                  size="lg"
                >
                  {item.name}
                </Link>
              </Card>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
