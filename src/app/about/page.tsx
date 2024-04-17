import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectsList from "./_ProjectsList";
import SkillsList from "./_SkillsList";
import Intro from "./_Intro";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-10 pb-10">
      <RoughNotationGroup show={true}>
        <Intro />
        <ProjectsList />
        <SkillsList />
      </RoughNotationGroup>
    </article>
  );
}

export default About;
