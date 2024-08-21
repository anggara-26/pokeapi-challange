import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Header from "@/components/header";

import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poke API Challange",
  description:
    "Challange to create simple web app using pokeapi and javascript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={twMerge(
          inter.className,
          "flex min-h-screen flex-col gap-10 overflow-x-hidden bg-amber-50 text-gray-800",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
