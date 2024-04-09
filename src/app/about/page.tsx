import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-14">
      <RoughNotationGroup show={true}>
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-black">
            <RoughNotation
              type="highlight"
              strokeWidth={2}
              color="#EE4266"
              animationDuration={1000}
            >
              Hi, I&apos;m Sam
            </RoughNotation>
          </h1>
          <h2 className="text-2xl font-black">
            And I&apos;m a Software developer currently based around London.
          </h2>
          <p className="text-lg">
            I have recently had the pleasure of graduating from the 16-week
            intensive bootcamp at the School of Code, where I have grown both my
            technical skills in the fundamentals of frontend and back-end web
            development and collaborative skills in team projects. I continue to
            perfect my sense of humour for those moments when the code stops
            behaving.
          </p>
          <p className="text-xl font-black">
            I&apos;m on the lookout for a{" "}
            <RoughNotation
              type="highlight"
              strokeWidth={2}
              color="#2CF6B3"
              animationDuration={1000}
            >
              Junior Software Developer
            </RoughNotation>{" "}
            role where I can grow and meet likeminded people.
          </p>
        </div>

        <div className="flex w-11/12 mx-auto">
          <RoughNotation
            brackets={["left", "right"]}
            strokeWidth={5}
            color="#EE4266"

            type="bracket"
            padding={[8, 8]}
            animationDuration={800}
          >
            <h3 className="text-2xl font-black mb-6 ml-4"> Skills:</h3>
            <div className="flex mb-6">
              <ol className="flex flex-row gap-4 flex-wrap justify-center text-sea-salt text-lg font-bold">
                <li className="bg-onyx p-4 rounded-lg">JavaScript</li>
                <li className="bg-onyx p-4 rounded-lg">TypeScript</li>
                <li className="bg-onyx p-4 rounded-lg">Node.Js</li>
                <li className="bg-onyx p-4 rounded-lg">React</li>
                <li className="bg-onyx p-4 rounded-lg">SQL</li>
                <li className="bg-onyx p-4 rounded-lg">Next.js</li>
                <li className="bg-onyx p-4 rounded-lg">Angular</li>
                <li className="bg-onyx p-4 rounded-lg">Jest</li>
                <li className="bg-onyx p-4 rounded-lg">Express</li>
                <li className="bg-onyx p-4 rounded-lg">Java</li>
                <li className="bg-onyx p-4 rounded-lg">Android</li>
                <li className="bg-onyx p-4 rounded-lg">Git/Github</li>
                <li className="bg-onyx p-4 rounded-lg">Material UI</li>
                <li className="bg-onyx p-4 rounded-lg">PostgreSQL</li>
                <li className="bg-onyx p-4 rounded-lg">Ruby</li>
                <li className="bg-onyx p-4 rounded-lg">Rspec</li>
                <li className="bg-onyx p-4 rounded-lg">Agile</li>
              </ol>
            </div>
          </RoughNotation>
        </div>
      </RoughNotationGroup>
    </article>
  );
}

export default About;
