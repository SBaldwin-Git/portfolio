import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function SkillsList() {
  return (
    
        <div className="flex flex-col">
          <h3 className="text-4xl font-black mb-6 w-full">
            {" "}
            <RoughNotation
              type="highlight"
              strokeWidth={2}
              color="#EE4266"
              animationDuration={1000}
            >
              Skills:
            </RoughNotation>
          </h3>
          <div className="flex">
            <ol className="flex flex-row gap-2 flex-wrap justify-center text-sea-salt text-base font-medium">
              <li className="bg-onyx p-3 rounded-lg">JavaScript</li>
              <li className="bg-onyx p-3 rounded-lg">TypeScript</li>
              <li className="bg-onyx p-3 rounded-lg">Jest</li>
              <li className="bg-onyx p-3 rounded-lg">Node.Js</li>
              <li className="bg-onyx p-3 rounded-lg">React</li>
              <li className="bg-onyx p-3 rounded-lg">Next.js</li>
              <li className="bg-onyx p-3 rounded-lg">Angular</li>
              <li className="bg-onyx p-3 rounded-lg">Java</li>
              <li className="bg-onyx p-3 rounded-lg">SQL</li>
              <li className="bg-onyx p-3 rounded-lg">PostgreSQL</li>
              <li className="bg-onyx p-3 rounded-lg">Ruby</li>
            </ol>
          </div>
        </div>
  )
}

export default SkillsList