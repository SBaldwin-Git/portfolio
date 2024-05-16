import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import Intro from "./components/_Intro";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-10 pb-10">
      <RoughNotationGroup show={true}>
        <Intro />
      </RoughNotationGroup>
    </article>
  );
}

export default About;
