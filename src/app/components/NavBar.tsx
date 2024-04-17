import React from "react";

function NavBar() {
  return (
    <header className="sticky top-0 text-raisin-black flex justify-around w-screen mb-12 pb-4 pt-4 shadow-md shadow-french-grey z-50">
      <div className="nameContainer">
        <h1 className="text-raisin-black text-[2rem]">Sam Baldwin</h1>
      </div>

      <nav className="flex flex-row">
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
