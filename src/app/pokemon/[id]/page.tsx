"use client";

import PageTransition from "@/components/animation/pageTransition";
import { useFetchData } from "@/hooks/useFetchData";
import { useEffect } from "react";

export default function PokemonDetail({ params }: { params: { id: string } }) {
  const { data, error, loading }: any = useFetchData(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`,
  );

  const {
    data: speciesData,
    error: speciesError,
    loading: speciesLoading,
  }: any = useFetchData(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`,
  );

  const {
    data: evolutionData,
    error: evolutionError,
    loading: evolutionLoading,
  }: any = useFetchData(
    `https://pokeapi.co/api/v2/evolution-chain/${params.id}`,
  );

  useEffect(() => {
    console.log(speciesData);
    console.log(evolutionData);
  }, [data, speciesData, evolutionData]);

  if (loading) {
    return <center>Loading...</center>;
  }

  if (error) {
    return <center>Error</center>;
  }

  return (
    <PageTransition className="w-full">
      <div className="container mx-auto px-10">
        {data && (
          <div className="mx-auto grid grid-cols-2">
            <div className="flex flex-col items-center">
              <img
                src={data.sprites.front_default}
                alt={data.name}
                className="h-60 w-60 rounded-full p-4 shadow"
              />
              <h1 className="mt-4 text-3xl font-bold text-red-500">
                {data.name}
              </h1>
              <p className="mt-3 text-xl">ID: #{data.id}</p>
              <div className="mt-4 flex">
                {data.types.map((type: any) => (
                  <p
                    key={type.type.name}
                    className="mr-2 rounded-full bg-red-500 px-4 py-1 text-white"
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Species</h2>
              <p className="mt-5 text-lg">
                {speciesData?.flavor_text_entries[0].flavor_text}
              </p>
              <h2 className="mt-8 text-xl font-bold">Evolution</h2>
              <p className="mt-5 text-lg">
                {evolutionData?.chain.species.name}
              </p>
              <h2 className="mt-8 text-xl font-bold">Stats</h2>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {data.stats.map((stat: any) => (
                  <div key={stat.stat.name} className="text-center">
                    <p className="mb-2 text-2xl text-red-500">
                      {stat.base_stat}
                    </p>
                    <p className="text-base font-bold">{stat.stat.name}</p>
                  </div>
                ))}
              </div>
              <h2 className="mt-8 text-xl font-bold">Ability</h2>
              <div className="mt-5 flex">
                {data.abilities.map((ability: any) => (
                  <p
                    key={ability.ability.name}
                    className="mr-2 rounded-full bg-amber-600 px-4 py-1 text-white"
                  >
                    {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
