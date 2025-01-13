import Image from "next/image";
import Link from "next/link";
import LogOutButton from "./components/LogOutButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-8 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Admin Panel Logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-blue-500 font-bold text-xl sm:text-2xl">
          Welcome to the Admin Panel website
        </h1>

        <LogOutButton />

        <div className="flex flex-col gap-4 items-center">
          <p className="text-blue-500"> Are you already logged in?</p>
          <Link
            href="/admin"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-600 transition duration-300"
          >
            Go to the admin page
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
