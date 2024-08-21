import Image from "next/image";
import Link from "next/link";

import HomePokemon from "@/assets/images/home_pokemon.png";
import PageTransition from "@/components/animation/pageTransition";
import InteractiveButton from "@/components/button/interactiveButton";

export default function Home() {
  return (
    <PageTransition className="w-full">
      <div className="container mx-auto flex items-center justify-center px-10">
        <div className="w-full">
          <p className="text-5xl font-bold text-red-500">チャレンジ</p>
          <div className="my-6 h-0.5 w-40 bg-gray-700" />
          <h1 className="text-5xl/snug font-extrabold">
            Sebuah Direktori <span className="text-red-500">Pokemon</span> Yang
            Seru Dan Asik :D
          </h1>
          <p className="mt-6 text-lg">
            Website yang menyediakan informasi mengenai pokemon. Kamu bisa
            melihat detail dari setiap pokemon dan melihat sisi luar dalam dari
            karakter pokemon favorit-mu!
          </p>
          <Link href={"/pokemon"} className="mt-10 block w-fit">
            <InteractiveButton>Lihat Pokemon</InteractiveButton>
          </Link>
        </div>
        <div className="w-full">
          <Image
            src={HomePokemon}
            alt="pokemon"
            width={1920}
            className="ml-auto w-3/4"
          />
        </div>
      </div>
    </PageTransition>
  );
}
