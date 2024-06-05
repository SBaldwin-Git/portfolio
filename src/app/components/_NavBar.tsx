"use client";
import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 text-raisin-black flex lg:justify-end w-full lg:w-screen mb-12 pt-4 pr-6 z-50">
      {/* Mobile Burger Menu - Hidden on Desktop Displau  */}
      <div className="flex items-center md:hidden">
        <Hamburger rounded size={40} toggled={isOpen} toggle={setOpen} />
      </div>
      {/* Desktop Navbar Links */}
      <ul className="hidden lg:flex lg:gap-14 text-4xl p-1">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Side Panel Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-1/2 shadow-lg bg-sea-salt transform transition-transform ease-out duration-500 p-4 gap-2.5 flex justify-between ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col lg:gap-14 text-4xl">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Mobile Sidebar Close Button */}
        <div>
          <Hamburger rounded size={32} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
