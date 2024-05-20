import React from "react";
import Image from "next/image";

function ButtonRow() {
  return (
    <div className="flex gap-6">
      <button className="bg-red-crayola text-raisin-black py-2 px-4 rounded-lg border-4 border-raisin-black font-bold w-60 h-20 text-4xl">
        Projects
      </button>
      <button className="bg-raisin-black text-sea-salt py-2 px-4 rounded-lg border-4 border-raisin-black font-bold w-60 h-20 text-3xl
      flex justify-center items-center gap-2">
        <Image src='/images/GitHub_Logo_White.png' alt="GitHub Logo" width={120} height={90} />
        <Image src='/images/github-mark-white.png' alt="GitHub Cat" width={40} height={40}/>
      </button>
    </div>
  );
}

export default ButtonRow;
