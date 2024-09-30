import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Pastikan Anda menginstal Heroicons

export default function SearchInput({ fetchNews }) {
  const [search, setSearch] = useState("");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await fetchNews(search);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 relative flex items-center ">
        <div className="">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 "
          >
            <MagnifyingGlassIcon className="w-7 h-7 left-3 text-gray-500 mr-2" />
          </label>
        </div>
        <div className="mt-1 flex items-center w-full">
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 pl-10"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
      >
        Search
      </button>
    </form>
  );
}
