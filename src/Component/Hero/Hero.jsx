import React from 'react';

const Hero = () => {
  return (
    <div className='relative bg-hero-pattern h-screen bg-cover flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-2xl mb-5'>Welcome to React Webpage</h1>
        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, commodi.</p>
        <button className='btn bg-gray-400 px-5 py-3 rounded-sm'>See More</button>
      </div>
    </div>
  );
};

export default Hero;