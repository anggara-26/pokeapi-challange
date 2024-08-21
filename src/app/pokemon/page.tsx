"use client";

import { useEffect, useState } from "react";

import PageTransition from "@/components/animation/pageTransition";
import { PokemonCard } from "@/components/card";
import { useFetchData } from "@/hooks/useFetchData";
import { useDebounce } from "use-debounce";

const LIMIT_POKEMON = 12;

export default function Pokemon() {
  const [currentPage, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 1000);

  const getOffset = (page: number) => (page - 1) * LIMIT_POKEMON;

  const { data, error, loading }: any = useFetchData(
    `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT_POKEMON}&offset=${getOffset(currentPage)}`,
  );

  const {
    data: searchedData,
    error: searchError,
    loading: searchLoading,
  }: any = useFetchData(
    `https://pokeapi.co/api/v2/pokemon/${debouncedQuery[0]}`,
  );

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handlePage = (page: number) => {
    setPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    console.log(debouncedQuery[0]);
  }, [debouncedQuery]);

  return (
    <PageTransition className="w-full">
      <div className="container mx-auto px-10">
        <input
          type="text"
          placeholder="Search Pokemon"
          className="w-full rounded-lg border border-gray-300 bg-amber-50 px-6 py-3"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchLoading && <p>Loading...</p>}
        {loading && <p>Loading...</p>}
        {error && !searchQuery && <p>Error</p>}
        {data && !searchQuery && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {data.results.map((item: any) => (
              <PokemonCard key={item.name} name={item.name} url={item.url} />
            ))}
          </div>
        )}
        {searchedData && searchQuery && (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <PokemonCard
              name={searchedData?.name}
              url={`https://pokeapi.co/api/v2/pokemon/${searchedData?.id}/`}
            />
          </div>
        )}

        {!searchQuery && (
          <div className="mx-auto mt-10 flex justify-center gap-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Prev
            </button>
            <button
              onClick={() => handlePage(currentPage - 1)}
              className={`rounded-lg bg-gray-300 px-4 py-2 ${currentPage === 1 && "hidden"}`}
            >
              {currentPage - 1}
            </button>
            <button
              onClick={() => handlePage(currentPage)}
              className={`rounded-lg bg-red-500 px-4 py-2 text-white`}
            >
              {currentPage}
            </button>
            <button
              onClick={() => handlePage(currentPage + 1)}
              className={`rounded-lg bg-gray-300 px-4 py-2`}
            >
              {currentPage + 1}
            </button>
            <button
              onClick={handleNextPage}
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
