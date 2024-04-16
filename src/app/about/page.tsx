import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import ProjectsList from "./_ProjectsList";
import SkillsList from "./_SkillsList";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-10">
      <RoughNotationGroup show={true}>
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-black mb-2">
            <RoughNotation
              type="highlight"
              strokeWidth={2}
              color="#EE4266"
              animationDuration={1000}
            >
              Hi, I&apos;m Sam
            </RoughNotation>
          </h1>
          <h2 className="text-xl font-black">
            And I&apos;m a software developer currently based around London.
          </h2>
          <p className="text-lg">
            I have recently had the pleasure of graduating from the 16-week
            intensive bootcamp at the School of Code, where I have grown both my
            technical skills in the fundamentals of{" "}
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              padding={0}
              color="#2CF6B3"
              animationDuration={1200}
            >
              frontend and backend web development and collaborative skills{" "}
            </RoughNotation>{" "}
            in team projects.{<br />} I continue to perfect my sense of humour
            for those moments when the code stops behaving.
          </p>
          <p className="text-xl font-black">
            I&apos;m on the lookout for a{" "}
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              padding={0}
              color="#2CF6B3"
              animationDuration={1200}
            >
              Junior Software Developer
            </RoughNotation>{" "}
            role where I can grow and meet likeminded people with a company that
            shares the same values as me.
          </p>
        </div>
        <ProjectsList />
      </RoughNotationGroup>
    </article>
  );
}

export default About;
