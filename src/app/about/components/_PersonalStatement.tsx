import React from "react";
import { RoughNotation } from "react-rough-notation";

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg sm:text-xl lg:text-6xl font-bold text-raisin-black-sub-text relative inline-block underline underline-offset-8">About Me</h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-raisin-black-sub-text">
        Hello! I&apos;m a Software Developer currently based in Buckinghamshire,
        looking for a{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={1}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          Junior&nbsp;Software&nbsp;Developer
        </RoughNotation>{" "}
        role where I can{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={1}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          grow
        </RoughNotation>
        {" "}and{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={1}
          padding={1}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          collaborate
        </RoughNotation>{" "}
        with amazing people while developing my awful sense of humour.
        <br />
        My favourite part of developing software are the people I get to meet and
        learn from!
      </p>
    </div>
  );
}

export default PersonalStatement;
