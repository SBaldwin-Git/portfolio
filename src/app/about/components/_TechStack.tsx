import React from "react";
import StackIcon from "tech-stack-icons";

function TechStack() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
      <div className="grid grid-cols-8 gap-6">
        <StackIcon name="js" />
        <StackIcon name="typescript" />
        <StackIcon name="jest" />
        <StackIcon name="nodejs" />
        <StackIcon name="reactjs" />
        <StackIcon name="nextjs" />
        <StackIcon name="angular" />
        <StackIcon name="postgresql" />
      </div>
    </div>
  );
}

export default TechStack;
