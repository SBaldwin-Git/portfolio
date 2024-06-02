import React from "react";
import Image from "next/image";

function ButtonRow() {
  return (
    <div className="flex gap-6">
      <button className=" hover:border-bright-red-crayola hover:text-bright-red-crayola transition-colors duration-200 text-red-crayola py-2 px-4 rounded border-4 border-red-crayola font-bold w-80 h-20 text-3xl bg-sea-salt">
        Check Out My Projects
      </button>
    </div>
  );
}

export default ButtonRow;
