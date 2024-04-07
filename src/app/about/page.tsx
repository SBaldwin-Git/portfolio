import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function About() {
  return (
    <article className="text-raisin-black flex flex-col gap-5">
      <h1 className="text-2xl">
        <RoughNotation
          type="underline"
          strokeWidth={2}
          color="#EE4266"
          show={true}
        >
          Hi, I&apos;m Sam, a software developer currently based around London.
        </RoughNotation>
      </h1>

      <p>
        I have recently had the pleasure of graduating from the 16-week
        intensive bootcamp at the School of Code, where I have grown both my
        technical skills in the fundamentals of full-stack web development and
        collaborative skills in team projects.
      </p>

      <p>
        My technical toolkit includes JavaScript, TypeScript, Node.Js, React,
        and SQL, with ongoing learning in Next.js and Angular. Colleagues know
        me for my interpersonal skills and meticulous attention to detail,
        qualities that I&apos;m eager to bring to a junior software developer
        role where I can continue to learn, innovate, and grow.
      </p>
      <p>Always learning and always coding!</p>

      <p>Currently I refining my skills in:</p>
      <ul className="list-disc">
        <li>Node.js - Version 14+</li>
        <li>RESTful API&apos;s</li>
        <li>Angular - Version 17+</li>
      </ul>
      <p>
        I&apos;m on the lookout for a junior software developer role where I can
        grow and meet likeminded people.
      </p>
    </article>
  );
}

export default About;
