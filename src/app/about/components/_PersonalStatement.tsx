import React from "react";
import { RoughNotation } from "react-rough-notation";

function PersonalStatement() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-raisin-black-sub-text ">
        I&apos;m a Software Developer currently based in Buckinghamshire,
        looking for a{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={1}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          {" "}
          Junior Software Developer
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
        </RoughNotation>{" "}
        and{" "}
        <RoughNotation
          type="highlight"
          strokeWidth={1}
          padding={0}
          color="#EE4266"
          animationDuration={1200}
          animationDelay={2000}
        >
          collaborate
        </RoughNotation>{" "}
        with amazing people while developing my awful sense of humour. My
        favourite part of developing software are the people I get to meet and
        learn from!
      </h2>
    </div>
  );
}

export default PersonalStatement;
