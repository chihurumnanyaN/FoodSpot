import React from 'react'


import customer1 from '../assets/img/customers/ben.jpg';
import customer2 from '../assets/img/customers/dave.jpg';
import customer3 from '../assets/img/customers/hannah.jpg';
import customer4 from '../assets/img/customers/steve.jpg';

//importing more images needed for the testimonials section

import image1 from '../assets/img/gallery/gallery-1.jpg';
import image2 from '../assets/img/gallery/gallery-2.jpg';
import image3 from '../assets/img/gallery/gallery-3.jpg';
import image4 from '../assets/img/gallery/gallery-4.jpg';
import image5 from '../assets/img/gallery/gallery-5.jpg';
import image6 from '../assets/img/gallery/gallery-6.jpg';
import image7 from '../assets/img/gallery/gallery-7.jpg';
import image8 from '../assets/img/gallery/gallery-8.jpg';
import image9 from '../assets/img/gallery/gallery-9.jpg';
import image10 from '../assets/img/gallery/gallery-10.jpg';
import image11 from '../assets/img/gallery/gallery-11.jpg';
import image12 from '../assets/img/gallery/gallery-12.jpg';

const Testimonials = ({img ,sayings ,name}) => {
    return (
        <div className="flex flex-col justify-start gap-4 m-2 items-start w-60 mt-10 ">
            <img 
            className="w-15 h-15 rounded-full mb-4"
            src={img} 
            alt={`A photo of ${name}, our customer`}
             />
            <p className="text-xl font-gray-600 ">{sayings}</p>
            <p className="font-medium">- {name}</p>
        </div>
    )
}

const TestimonialsPage = () => {
  return (
    <section className="flex flex-row justify-center items-center gap-8 bg-orange-200 mt-10 pl-15 pr-0 py-20">
      <div classname="flex flex-col justify-center items-start gap-10 w-80">
        <p className="text-orange-500 font-bold" >TESTIMONIALS</p>
        <h1 className="text- font-bold text-gray-700">Once You Try it, You Can't<br/> Go Back</h1>
        <div className="grid grid-row-2 grid-cols-2 gap-2n mt-20 ">
            <Testimonials
               img={customer1}
               sayings="Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical."
               name="Emma Ngozi"
            />

             <Testimonials
               img={customer2}
               sayings="FoodSpot AI has completely changed my life. I no longer have to worry about what to eat, and the meals are always delicious!"
               name="samuel brown"
            />

             <Testimonials
               img={customer3}
               sayings="FoodSpot AI has made my life so much easier. I can now focus on my work without worrying about meal planning."
               name="jane doe"
            />

            <Testimonials
               img={customer4}
               sayings="I got FoodSpot for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic"
               name="John Smith"
            />

        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pr-0 w-fit">
        <img className="w-45 h-45 " src={image1} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image2} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image3} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image4} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image5} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image6} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image7} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image8} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image9} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image10} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image11} alt="A photo of a delicious meal" />
        <img className="w-45 h-45 " src={image12} alt="A photo of a delicious meal" />
      </div>
    </section>
  )
}

export default TestimonialsPage
