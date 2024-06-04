"use client"
import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 text-raisin-black flex lg:justify-end w-full lg:w-screen mb-12 pt-4 pr-6 z-50">
      <div className="flex items-center md:hidden">
        <Hamburger rounded size={48} toggled={isOpen} toggle={setOpen} />
      </div>

      <ul className="hidden lg:flex lg:gap-14 text-4xl">
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
    </header>
  );
}

export default NavBar;
