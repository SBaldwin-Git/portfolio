import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

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
            technical skills in the fundamentals of frontend and back-end web
            development and collaborative skills in team projects.{<br />} I
            continue to perfect my sense of humour for those moments when the
            code stops behaving.
          </p>
          <p className="text-xl font-black">
            I&apos;m on the lookout for a{" "}
            <RoughNotation
              type="highlight"
              strokeWidth={3}
              color="#2CF6B3"
              animationDuration={1000}
            >
              Junior Software Developer
            </RoughNotation>{" "}
            role where I can grow and meet likeminded people.
          </p>
        </div>

        <div className="flex flex-col w-4/5 mx-auto">
          <h3 className="text-2xl font-black mb-6 w-full">            <RoughNotation
              type="highlight"
              strokeWidth={2}
              color="#2CF6B3"
              animationDuration={1000}
            >Skills:</RoughNotation></h3>
          <div className="flex mb-6">
            <ol className="flex flex-row gap-2 flex-wrap justify-center text-sea-salt text-base font-medium">
              <li className="bg-onyx p-3 rounded-lg">JavaScript</li>
              <li className="bg-onyx p-3 rounded-lg">TypeScript</li>
              <li className="bg-onyx p-3 rounded-lg">Node.Js</li>
              <li className="bg-onyx p-3 rounded-lg">React</li>
              <li className="bg-onyx p-3 rounded-lg">SQL</li>
              <li className="bg-onyx p-3 rounded-lg">Next.js</li>
              <li className="bg-onyx p-3 rounded-lg">Angular</li>
              <li className="bg-onyx p-3 rounded-lg">Jest</li>
              <li className="bg-onyx p-3 rounded-lg">Express</li>
              <li className="bg-onyx p-3 rounded-lg">Java</li>
              <li className="bg-onyx p-3 rounded-lg">Android</li>
              <li className="bg-onyx p-3 rounded-lg">Git/Github</li>
              <li className="bg-onyx p-3 rounded-lg">Material UI</li>
              <li className="bg-onyx p-3 rounded-lg">PostgreSQL</li>
              <li className="bg-onyx p-3 rounded-lg">Ruby</li>
              <li className="bg-onyx p-3 rounded-lg">Rspec</li>
              <li className="bg-onyx p-3 rounded-lg">Agile</li>
            </ol>
          </div>
        </div>
      </RoughNotationGroup>
    </article>
  );
}

export default About;
