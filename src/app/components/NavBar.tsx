import React from "react";

function NavBar() {
  return (
    <header className="text-ivory flex justify-between w-full">
      <div className="nameContainer">
        <h1 className="text-ivory font-bold text-[2.5rem]">Sam Baldwin</h1>
      </div>

      <nav className="flex flex-row">
        <ul className="flex gap-8 text-[2rem]">
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
