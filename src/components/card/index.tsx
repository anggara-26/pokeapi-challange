import { useFetchData } from "@/hooks/useFetchData";
import Link from "next/link";
import { useEffect } from "react";

export function PokemonCard({ name, url }: { name: string; url: string }) {
  const { data, error, loading }: any = useFetchData(url);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <SkeletonPokemonCard />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {data && (
        <Link href={`/pokemon/${data.id}`}>
          <div className="rounded-br-xl rounded-tl-xl border border-gray-800 bg-orange-50 p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={data.sprites.front_default}
                  alt={data.name}
                  className="h-16 w-16 rounded-full"
                />
                <div className="ml-2">
                  <span className="block text-lg font-semibold text-gray-600">
                    {name}
                  </span>
                  <span className="block text-sm font-normal text-gray-400">
                    ID: #{data.id}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                {data.types?.map((type: any) => (
                  <span
                    key={type}
                    className="mr-1 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

function SkeletonPokemonCard() {
  return (
    <div className="animate-pulse rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300" />
          <div className="ml-2">
            <span className="block h-4 w-20 rounded bg-gray-300" />
            <span className="block h-2 w-10 rounded bg-gray-300" />
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-1 rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold text-white" />
          <span className="mr-1 rounded-full bg-gray-300 px-2 py-1 text-xs font-semibold text-white" />
        </div>
      </div>
    </div>
  );
}
