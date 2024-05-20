import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import Intro from "./components/_Intro";
import NameHeader from "./components/_NameHeader";
import TechStack from "./components/_TechStack";
import ButtonRow from "./components/_ButtonRow";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-48 mr-auto">
      <NameHeader />

      {/* <RoughNotationGroup show={true}>
          <Intro />
        </RoughNotationGroup> */}
      <div className="flex flex-col gap-6">
        <ButtonRow />
        <TechStack />
      </div>
    </article>
  );
}

export default About;
