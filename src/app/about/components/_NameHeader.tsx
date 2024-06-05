"use client";

import React from "react";
import Typewriter from "typewriter-effect";

function NameHeader() {
  return (
    <h1 className="text-9xl xl:text-10xl leading-none font-bold h-64 md:h-44 lg:h-80 ">
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
