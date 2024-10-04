import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Hero from '../Component/Hero/Hero';
import Card from '../Component/Card/Card';
import Footer from '../Component/Footer/Footer';

const Main = () => {

  const cardData = [
{title:'service1',description:'this is the service one' , image:'https://i.ibb.co.com/tb2TXYd/image.png'},
{title:'service2',description:'this is the service Two' , image:'https://i.ibb.co.com/tbXNBR0/image.png'},
{title:'service3',description:'this is the service Three' , image:'https://i.ibb.co.com/Tq8Kr42/image.png'},
{title:'service 4',description:'this is the service Four' , image:'https://i.ibb.co.com/tb2TXYd/image.png'}
  ]

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8'>
        {cardData.map((card,index) =>(
          <Card key={index} title={card.title} description={card.description} image={card.image}></Card>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;