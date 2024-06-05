import React from "react";

function ButtonRow() {
  return (
    <div className="flex">
      <button
        className=" hover:border-bright-red-crayola hover:text-bright-red-crayola transition-colors duration-200 text-red-crayola
       py-1 md:py-2 px-2 md:px-4 rounded border-4 border-red-crayola font-bold w-50 md:w-80 h-12 md:h-20 text-base md:text-3xl bg-sea-salt"
      >
        Check Out My Projects
      </button>
    </div>
  );
}

export default ButtonRow;
