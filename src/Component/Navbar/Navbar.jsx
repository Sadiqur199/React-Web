import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-gray-800 p-4'> 
      <div className='container mx-auto flex justify-between'>
        <div>
          <h1 className='text-white text-xl'>React Web page</h1>
        </div>
        <div>
          <ul className='container space-x-6 flex justify-between text-white'>
            <li><a href="#home" className='hover:text-yellow-400'>Home</a></li>
            <li><a href="#about" className='hover:text-yellow-400'>About</a></li>
            <li><a href="#service" className='hover:text-yellow-400'>Service</a></li>
            <li><a href="#contact" className='hover:text-yellow-400'>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;