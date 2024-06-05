"use client";

import React from "react";
import Typewriter from "typewriter-effect";

function NameHeader() {
  return (
    <h1 className="text-7xl md:text-9xl xl:text-10xl leading-none font-bold h-28 md:h-48 lg:h-80 ">
      {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} /> */}
      <Typewriter
        options={{
          strings: ["Sam <br/> Baldwin"],
          autoStart: true,
          loop: true,
          deleteSpeed: Infinity,
        }}
      />
    </h1>
  );
}

export default NameHeader;
