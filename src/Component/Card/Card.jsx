import React from 'react';

const Card = ({title,description, image}) => {
  return (
    <div className='max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-5'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-gray-600 mt-2'>{description}</p>
      </div>
    </div>
  );
};

export default Card;