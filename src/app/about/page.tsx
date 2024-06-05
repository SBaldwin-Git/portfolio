import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import NameHeader from "./components/_NameHeader";
import TechStack from "./components/_TechStack";
import ButtonRow from "./components/_ButtonRow";
import PersonalStatement from "./components/_PersonalStatement";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-10 sm:gap-24 lg:gap-28 mr-auto w-full">
      <RoughNotationGroup show={true}>
        <NameHeader />
        <div className="flex flex-col gap-5 md:gap-10">
          <PersonalStatement />
          <ButtonRow />
          <TechStack />
        </div>
      </RoughNotationGroup>
    </article>
  );
}

export default About;
