import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

function ProjectsList() {
  return (
    <>
      <h1 className="text-4xl font-black">
        <RoughNotation
          type="highlight"
          strokeWidth={3}
          color="#EE4266"
          animationDuration={1000}
        >
          Projects:
        </RoughNotation>
      </h1>
<div className='grid grid-cols-2 gap-10'>
    <div className='w-fit rounded overflow-hidden shadow-lg'>
      <Image src='/images/card-top.jpg' alt='Card 1' width={600} height={400} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Title 1</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className='w-fit rounded overflow-hidden shadow-lg'>
      <Image src='/images/card-top.jpg' alt='Card 2' width={600} height={400} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Title 2</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className='w-fit rounded overflow-hidden shadow-lg'>
      <Image src='/images/card-top.jpg' alt='Card 3' width={600} height={400} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Title 3</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className='w-fit rounded overflow-hidden shadow-lg'>
      <Image src='/images/card-top.jpg' alt='Card 4' width={600} height={400} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Title 4</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
    </>
  );
}

export default ProjectsList;
