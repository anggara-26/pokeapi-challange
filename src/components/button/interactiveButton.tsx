"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function InteractiveButton({
  children,
  className,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}>) {
  return (
    <div className="relative">
      <motion.button className="w-max rounded border border-gray-700 bg-transparent px-12 py-3 text-xl">
        Lihat Pokemon
      </motion.button>
      <motion.button
        whileHover={{
          y: -3,
          x: 3,
        }}
        whileTap={{
          y: 0,
          x: 0,
          transition: { duration: 0.1, ease: "easeOut" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute -right-1 -top-1 w-max rounded bg-red-500 px-12 py-3 text-xl text-white"
      >
        Lihat Pokemon
      </motion.button>
    </div>
  );
}
