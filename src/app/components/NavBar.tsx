import React from "react";

function NavBar() {
  return (
    <header className="text-raisin-black flex justify-between w-full mb-20">
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
