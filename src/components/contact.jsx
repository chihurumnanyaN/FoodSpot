import React from 'react'


import ladyEating from '../assets/img/eating.jpg';

const Contact = () => {

  const labelstyle = "text-yellow-900 text-xl font-bold mb-1 block";

  // This is the style for the input fields
  const inputstyle = "border border-gray-300 rounded-md p-2 mb-4 w-75 h-13 bg-white";

  const dstyle = "flex flex-col justify-start items-start gap-1";
  return (
    <section className="flex flex-col justify-center items-center ">
       <div className="flex flex-col md:flex-row justify-center items-start gap-4 w-full md:w-280 bg-orange-300 rounded-md mt-20 mb-40">
         <div className="flex flex-col justify-center items-start gap-4 md:w-2/3 p-10">
            <h1 className="text-5xl text-yellow-900 font-bold">Get Your first meal for free!</h1>
            <p  className="text-xl text-gray-800">Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!</p>
            <form action="post" className="flex flex-row flex-wrap gap-5">
                 <div className={dstyle}>
                                  <label className={labelstyle} htmlFor="name">Full Name</label>
                <input className={inputstyle} id="name" type="text" placeholder="Enter your name" required />
                 </div>

                <div className={dstyle}>
                <label className={labelstyle} htmlFor="email">Email Address</label>
                <input className={inputstyle} id="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className={dstyle}>
                <label className={labelstyle} htmlFor="find-us">Where did you hear about us</label>
                <select className={inputstyle} name="" id="find-us">
                    <option value="">Please Choose one option</option>
                    <option value="">friends and family</option>
                    <option value="">youtube</option>
                    <option value="">podcast</option>
                    <option value="">facebook ads</option>
                    <option value="">others</option>

                </select>
                </div>
                <div className={dstyle}>
                  <div className="h-8"></div>
                <button className="w-75 bg-yellow-900 text-white text-2xl font-bold rounded-md h-13" type="submit">Sign up now</button>
                </div>
            </form>
         </div>
          <img
          className=" md:w-1/3 h-auto rounded-t-md md:rounded-r-md"
           src={ladyEating} 
           alt="lady eating our delicious meal" 
           />
       </div>
    </section>
  )
}

export default Contact
