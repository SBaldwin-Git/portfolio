"use client";
import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 text-raisin-black flex xl:justify-end w-full lg:w-screen mb-5 xl:mb-12 pt-2 xl:p-4 xl:pr-6 z-50">
      {/* Mobile Burger Menu - Hidden on Desktop Displau  */}
      <div className="flex items-center xl:hidden justify-between w-full">
        <Hamburger rounded size={42} toggled={isOpen} toggle={setOpen} />
        <button className="flex justify-center items-center rounded-full bg-raisin-black hover:bg-bright-raisin-black w-28 h-12">
          <Image
            src="/images/GitHub_Logo_White.png"
            alt="Github Logo"
            width={60}
            height={50}
          />
          <Image
            src="/images/github-mark-white.png"
            alt="Github Cat Logo"
            width={22}
            height={22} 
          />
        </button>
      </div>
      {/* Desktop Navbar Links */}
      <ul className="hidden xl:flex xl:gap-14 text-4xl p-1">
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
        <ul className="flex flex-col xl:gap-14 text-4xl">
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
