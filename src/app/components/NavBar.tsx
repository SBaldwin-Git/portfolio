import React from "react";

function NavBar() {
  return (
    <header className="text-ivory flex justify-between w-full">
      <nav className="flex flex-row">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
      <div className="gitHubContainer">
        <a href="https://github.com/SBaldwin-Git">SBaldwin-Git</a>
      </div>
    </header>
  );
}

export default NavBar;
