import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 text-raisin-black flex justify-end w-screen mb-12 p-4 pr-20 z-50">
      <nav className="flex flex-row ">
        <ul className="flex gap-14 text-[2rem]">
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
      </nav>
    </header>
  );
}

export default NavBar;
