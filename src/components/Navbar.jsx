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
import { NewspaperIcon } from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput.jsx";
import Filter from "./Filter.jsx";

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
    <>
      <Navbar isBordered shouldHideOnScroll className="w-full">
        
        <NavbarContent>
          <NavbarContent></NavbarContent>
          <NavbarContent>
            <NavbarBrand className="flex justify-center">
              <NewspaperIcon className="w-10 h-10" />
              <p className="font-bold text-inherit mx-2">News App</p>
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
      
        <NavbarContent className="flex ">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarContent justify="center" className="hidden sm:flex gap-3  w-full ">
            {/* Menu Utama */}
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const menuActiveClass = isActive
                ? "text-blue-900 font-semibold border-b-2 border-blue-900 h-full"
                : "text-gray-700";
              return (
                <NavbarItem
                  className=" flex h-full items-center justify-center text-center"
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

        <NavbarMenu>
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
    </>
  );
}
