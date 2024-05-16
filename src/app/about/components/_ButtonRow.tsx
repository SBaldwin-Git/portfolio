import React from "react";

function ButtonRow() {
  return (
    <div className="flex gap-6">
      <button className="bg-aquamarine py-2 px-4 rounded border border-gray-300 shadow-md text-raisin-black font-bold">
        Projects
      </button>
      <button className="bg-aquamarine py-2 px-4 rounded border border-gray-300 shadow-md text-raisin-black font-bold">
        Contact Me
      </button>
    </div>
  );
}

export default ButtonRow;
