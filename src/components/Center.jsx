import React from 'react';
import Typed from 'react-typed';

const Center = () => {
  return (
    
      <div className='text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* <p className=' font-bold p-2 tracking-wider'>
          BUILDING   WITH   SUSTAINABILITY
        </p> */}
        <h1 className='text-indigo-600 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Hall Booking Module
        </h1>
        {/* <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Sustainable architecture for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['CON', 'STR', 'UCT','ION']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div> */}
        <p className='md:text-2xl text-xl font-bold text-gray-500 tracking-wider'>Providing interfaces and an holistic approach to track bookings inter-dependently</p>
      </div>
   
  );
};

export default Center;