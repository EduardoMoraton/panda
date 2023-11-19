"use client";

import { UserButton } from "@clerk/clerk-react";

function Header({ color }: { color: string }) {
  return (
    <header className={`bg-opacity-10 backdrop-blur-lg bg-gray-200 text-${color} py-6 px-4 top-0`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-lg font-semibold">Panda</h1>
          </a>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#example" className="hover:text-gray-300">Examples</a>
          <a href="#login" className="hover:text-gray-300">LogIn</a>
          <a href="#faq" className="hover:text-gray-300">FAQs</a>
          <a href="#sponsor" className="hover:text-gray-300">Sponsors</a>
          <UserButton afterSignOutUrl="/" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
