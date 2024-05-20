"use client";

import React from "react";
import Typewriter from "typewriter-effect";

function NameHeader() {
  return (
    <h1 className="text-10xl leading-none font-bold">
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
