import React from "react";
import { RoughNotation } from "react-rough-notation";

function NameHeader() {
  return (
    <div className="h-64 md:h-44 lg:h-80 flex flex-col justify-center lg:gap-8 text-raisin-black opacity-90">
      <h1 className="text-9xl xl:text-6xl leading-none font-bold text-raisin-black">
        Hello, I&apos;m <span className="text-red-crayola">Sam</span>!
      </h1>
      <h2 className="text-9xl xl:text-5xl leading-none backdrop-opacity-70">
        I&apos;m a Junior Software Developer and I am
        {" "}
        <RoughNotation
          type="underline"
          strokeWidth={4}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          currently&nbsp;looking&nbsp;for&nbsp;work.
        </RoughNotation>
      </h2>
    </div>
  );
}

export default NameHeader;
