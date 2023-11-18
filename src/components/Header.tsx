"use client";

function Header() {
  return (
    <header className="bg-opacity-10 backdrop-blur-lg text-white py-6 px-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Panda</h1>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
