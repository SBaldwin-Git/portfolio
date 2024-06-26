import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import NameHeader from "./components/_NameHeader";
import ButtonRow from "./components/_ButtonRow";
import PersonalStatement from "./components/_PersonalStatement";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-2 sm:gap-24 md:gap-22 lg:gap-28 mx-auto w-full xl:w-4/5">
      <RoughNotationGroup show={true}>
        <NameHeader />
        <div className="flex flex-col gap-12 md:gap-12 xl:gap-10">
          <PersonalStatement />
          <ButtonRow />
        </div>
      </RoughNotationGroup>
    </article>
  );
}

export default About;
