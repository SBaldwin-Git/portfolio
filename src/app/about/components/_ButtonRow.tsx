import React from "react";

function ButtonRow() {
  return (
    <div className="flex">
      <button
        className=" hover:border-bright-red-crayola hover:text-bright-red-crayola transition-colors duration-200 text-red-crayola
       py-2 md:py-2 px-2 md:px-4 rounded border-4 border-red-crayola font-bold w-3/5 md:w-80 h-16 md:h-20 text-2xl md:text-3xl bg-sea-salt"
      >
        Check Out My Projects
      </button>
    </div>
  );
}

export default ButtonRow;
