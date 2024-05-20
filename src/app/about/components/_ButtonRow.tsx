import React from "react";

function ButtonRow() {
  return (
    <div className="flex gap-6">
      <button className="bg-red-crayola text-raisin-black py-2 px-4 rounded border-4 border-raisin-black font-bold w-60 h-20 text-3xl">
        Projects
      </button>
      <button className="bg-red-crayola text-raisin-black py-2 px-4 rounded border-4 border-raisin-black font-bold w-60 h-20 text-3xl">
        Contact Me
      </button>
    </div>
  );
}

export default ButtonRow;
