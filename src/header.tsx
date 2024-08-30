import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-purple-500">Portfolio</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">About</a></li>
            <li><a href="#" className="hover:text-purple-500">Services</a></li>
            <li><a href="#" className="hover:text-purple-500">Portfolio</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
