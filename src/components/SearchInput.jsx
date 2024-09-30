// src/components/SearchInput.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice'; 
import { SearchIcon } from './SearchIcon.jsx';
import { Navbar, NavbarContent, Button, Input } from '@nextui-org/react';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(fetchNews(search)); // Gunakan dispatch untuk memanggil fetchNews
      setSearch('');
    }
  };

  return (
    <Navbar>
      <NavbarContent as="div" className="items-center sm:px-2 px-8" justify="end">
        <form onSubmit={handleSubmit} className="flex items-center">
          <Input
            classNames={{
              base: 'w-full h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper: 'h-full font-bold text-blue-800 bg-white-400/20 border rounded-xl',
            }}
            placeholder="Cari Berita..."
            size="sm"
            startContent={<SearchIcon size={20} />}
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" className="ml-2" auto>
            Search
          </Button>
        </form>
      </NavbarContent>
    </Navbar>
  );
}
