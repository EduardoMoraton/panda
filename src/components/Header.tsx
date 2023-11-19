"use client";

function Header() {
  return (
    <header className="bg-opacity-10 backdrop-blur-lg bg-gray-200 text-white py-6 px-4 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Panda</h1>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a href="#example" className="hover:text-gray-300">Examples</a>
          <a href="#login" className="hover:text-gray-300">LogIn</a>
          <a href="#faq" className="hover:text-gray-300">FAQs</a>
          <a href="#sponsor" className="hover:text-gray-300">Sponsors</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
