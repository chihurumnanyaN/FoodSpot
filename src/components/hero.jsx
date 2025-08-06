import React from 'react';
import About from "../components/about.jsx";

// Import hero image
import heroImage from '../assets/img/hero.png';

// Import customer images
import customer1 from '../assets/img/customers/customer-1.jpg';
import customer2 from '../assets/img/customers/customer-2.jpg';
import customer3 from '../assets/img/customers/customer-3.jpg';
import customer4 from '../assets/img/customers/customer-4.jpg';
import customer5 from '../assets/img/customers/customer-5.jpg';
import customer6 from '../assets/img/customers/customer-6.jpg';

const Hero = () => {
  const customers = [
    { src: customer1, alt: 'Customer 1' },
    { src: customer2, alt: 'Customer 2' },
    { src: customer3, alt: 'Customer 3' },
    { src: customer4, alt: 'Customer 4' },
    { src: customer5, alt: 'Customer 5' },
    { src: customer6, alt: 'Customer 6' }
  ];

  const imageStyle = 'w-10 h-10 -ml-2 rounded-full ring-2 ring-white';

  return (
    <>
    <main className='bg-orange-100 flex flex-row justify-center pb-20 px-15 py-10 gap-10 h-auto items-center'>
      <div className='flex flex-col justify-left h-auto w-1/2 gap-10'>
        <h1 className="text-5xl mt-10 font-extrabold text-gray-700 text-left flex flex-col">
          <span>A healthy meal</span>
          <span>delivered to your door,</span>
          <span>every single day</span>
        </h1>
        <p className="text-gray-500 text-2xl">
          The smart 365-days-per-year food subscription that will make you eat healthy again.
          Tailored to your personal tastes and nutritional needs.
        </p>
        <ul className="flex flex-row gap-5">
          <li>
            <button className='p-3 h-12 rounded-md font-extrabold text-xl w-60 text-white bg-orange-500'>
              Start Eating Well
            </button>
          </li>
          <li>
            <button className='p-3 h-12 rounded-md font-extrabold text-xl w-50 text-orange-400 bg-white'>
              Learn More ↠
            </button>
          </li>
        </ul>

        <div className='flex flex-row items-center justify-start mt-10'>
          {customers.map((customer, index) => (
            <img
              key={index}
              src={customer.src}
              alt={customer.alt}
              className={`customer-img ${imageStyle}`}
            />
          ))}
          <p className='text-gray-500 ml-4 font-bold text-lg'>
            <span className="text-orange-400">250,000+ </span>
            meals delivered last year!
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center w-1/2 p-5'>
        <img
          className='h-auto'
          src={heroImage}
          alt="an image of a delicious meal"
        />
      </div>
    </main>
    <About />
          </>
  );
};

export default Hero;
