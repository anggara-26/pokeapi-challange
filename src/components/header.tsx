"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

import LogoWhite from "@/assets/images/logo_white.png";
import LogoBlack from "@/assets/images/logo_black.png";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-between px-10 py-5">
        <div>
          <Image
            src={LogoBlack}
            alt="pokemon"
            width={200}
            height={200}
            className="w-16 dark:hidden"
          />
          <Image
            src={LogoWhite}
            alt="pokemon"
            width={200}
            height={200}
            className="hidden w-16 dark:block"
          />
        </div>
        <div>
          <div className="flex h-full items-center gap-10">
            <Link href={"/"}>
              <div
                className={twMerge(
                  "relative text-xl hover:text-red-500",
                  pathname === "/" && "text-red-500",
                )}
              >
                Home
                <div
                  className={twMerge(
                    "absolute -bottom-2 left-0 h-0.5 w-1/3 bg-gray-800",
                    pathname !== "/" && "hidden",
                  )}
                />
              </div>
            </Link>
            <Link href={"/pokemon"}>
              <div
                className={twMerge(
                  "relative text-xl hover:text-red-500",
                  pathname.startsWith("/pokemon") && "text-red-500",
                )}
              >
                Pokemon
                <div
                  className={twMerge(
                    "absolute -bottom-2 left-0 h-0.5 w-1/3 bg-gray-800",
                    !pathname.startsWith("/pokemon") && "hidden",
                  )}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pokemon",
    href: "/pokemon",
  },
];
