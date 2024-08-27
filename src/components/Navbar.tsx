// src/components/Navbar.tsx

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-black p-4 nav">
      <h1 className="text-white text-lg">
        <i className="fab fa-github mr-2"></i> GitHub Finder
      </h1>
      <ul className="flex xrom">
        <li className="mx-2 lop">
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li className="mx-2">
          <a href="/about" className="text-white">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
