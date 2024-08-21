import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto mt-auto flex w-full items-center justify-center gap-10 self-end justify-self-end p-10">
      <div>
        <p className="w-max">
          Made with ❤️ by{" "}
          <Link
            href="https://instagram.com/anggara0526"
            target="_blank"
            className="text-red-500"
          >
            Anggara
          </Link>
        </p>
      </div>
      <div className="h-0.5 w-full bg-red-500" />
    </footer>
  );
}
