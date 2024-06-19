import React from "react";
import { RoughNotation } from "react-rough-notation";

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-6">
      {/* <h1 className="text-lg sm:text-xl lg:text-4xl font-bold text-raisin-black-sub-text relative inline-block underline underline-offset-8">About Me</h1> */}
      <p className="text-lg sm:text-xl text-raisin-black-sub-text">
        I&apos;m a Junior Software Developer currently based in Buckinghamshire,
        looking for a{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={0}
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
          strokeWidth={0}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          grow and collaborate
        </RoughNotation>{" "}
        with amazing people while developing my awful sense of humour.
      </p>
      <p className="text-lg sm:text-xl text-raisin-black-sub-text">
        I am{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={0}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          open&nbsp;to&nbsp;relocate
        </RoughNotation>{" "}
        for the right opportunity anywhere in the UK.
      </p>
      <p className="text-lg sm:text-xl text-raisin-black-sub-text">
        My favourite part of developing software are the people I get to meet
        and learn from!
      </p>
    </div>
  );
}

export default PersonalStatement;
