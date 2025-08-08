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

  return (
    <>
      <main className="bg-orange-100 flex flex-col-reverse md:flex-row items-center md:justify-between px-6 sm:px-10 md:px-16 py-12 gap-12 md:gap-8">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 leading-snug">
            <span className="block">A healthy meal</span>
            <span className="block">delivered to your door,</span>
            <span className="block">every single day</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
            The smart 365-days-per-year food subscription that will make you eat healthy again.
            Tailored to your personal tastes and nutritional needs.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-md font-extrabold text-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors w-full sm:w-auto">
              Start Eating Well
            </button>
            <button className="px-6 py-3 rounded-md font-extrabold text-lg text-orange-500 bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto">
              Learn More ↠
            </button>
          </div>

          {/* CUSTOMERS */}
          <div className="flex items-center flex-wrap gap-3 mt-6">
            {customers.map((customer, index) => (
              <img
                key={index}
                src={customer.src}
                alt={customer.alt}
                className="w-10 h-10 rounded-full ring-2 ring-white -ml-5 md:-ml-5 first:ml-0"
              />
            ))}
            <p className="text-gray-500 font-bold text-base sm:text-lg ml-4">
              <span className="text-orange-500">250,000+ </span>
              meals delivered last year!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            className="w-full max-w-sm sm:max-w-md h-auto"
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
