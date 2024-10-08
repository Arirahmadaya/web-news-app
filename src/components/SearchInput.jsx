import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import { Navbar, NavbarContent, Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(fetchNews(search)); 
      setSearch("");
    }
  };

  const handleIconClick = () => {
    if (search.trim()) {
      dispatch(fetchNews(search)); // Trigger fetchNews ketika ikon diklik
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <Input
        classNames={{
          base: "w-full h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-bold text-blue-800 bg-white-400/20 neu-img border rounded-xl",
        }}
        placeholder="Search News..."
        size="sm"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        startContent={
          <MagnifyingGlassIcon
            className="w-7 h-6 text-gray-500 cursor-pointer"
            onClick={handleIconClick} // Event klik pada ikon
          />
        }
      />
    </form>
  );
}
