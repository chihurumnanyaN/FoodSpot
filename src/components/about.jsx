import React from 'react'




const Companies = () => {

    const CompaniesLogo =[
      {src: "./src/assets/img/logos/forbes.png", alt: "forbes 1"},
        {src: "./src/assets/img/logos/usa-today.png", alt: "usa-today 2"},
        {src: "./src/assets/img/logos/techcrunch.png", alt: "techcrunch 3"},
        {src: "./src/assets/img/logos/business-insider.png", alt: "business-insider 4"},
        {src: "./src/assets/img/logos/the-new-york-times.png", alt: "the new york times 5"},
    ]
     const style = "h-8 w-auto c object-contain filter grayscale"
  return (
    <>
            <div className='flex flex-col justify-center items-center mt-10'>
            <p className="text-gray-600 font-bold ">AS FEATURED IN</p>
        <div className='flex flex-row justify-center items-center gap-10 mt-4 mb-10'>
            
            {CompaniesLogo.map((company, index) => (
            <img
                key={index}
                src={company.src}
                alt={company.alt}
                className={style}
            />
            ))}
        </div>
        </div>
    </>
  )
}

const About = () => {
  return (
    <>
    <Companies />
    <div className='flex flex-col px-25 justify-left items-left mt-20'>
      <p className="capitalize text-orange-600 font-bold ">HOW IT WORKS</p>
      <h1 className="text-5xl text-gray-800 font-extrabold mt-5">Your daily dose of health in 3 simple steps</h1>
      </div>
      <section  className="flex flex-col ">

        <div className="flex pt-20 px-25  mt-30">
            <div className="w-1/2 gap-20 ">
                 <p className="text-8xl font-bold text-gray-300">01</p>
         <h3 className="text-3xl font-bold text-gray-800 mt-6">
            Tell us what you like (and what not)
         </h3>
         <p className="text-gray-500 text-xl mt-8">Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!</p>
        
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                <div className="w-70 h-70 rounded-full bg-orange-100 flex justify-center items-center">
                    <div className="w-60 h-60 rounded-full bg-orange-200 z-2"></div>
                    <img className="absolute w-50 h-auto z-4" src="../src/assets/img/app/app-screen-1.png" alt="firsr app screen" />
                </div>
            </div>
        </div>
        

        <div className="flex pt-20 px-25  mt-30">
           
            <div className="w-1/2 flex justify-center items-center ">
                <div className="w-70 h-70 rounded-full bg-orange-100 flex justify-center items-center">
                    <div className="w-60 h-60 rounded-full bg-orange-200 z-2"></div>
                    <img className="absolute w-50 h-auto z-4" src="../src/assets/img/app/app-screen-2.png" alt="firsr app screen" />
                </div>
            </div>

             <div className="w-1/2 gap-20 ">
                 <p className="text-8xl font-bold text-gray-300">02</p>
         <h3 className="text-3xl font-bold text-gray-800 mt-6">
            Approve your weekly meal plan:
         </h3>
         <p className="text-gray-500 text-xl mt-8">Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.</p>
        
            </div>
        </div>


        <div className="flex pt-20 px-25  mt-30">
            <div className="w-1/2 gap-20 ">
                 <p className="text-8xl font-bold text-gray-300">03</p>
         <h3 className="text-3xl font-bold text-gray-800 mt-6">
           Receive meals at convenient time:
         </h3>
         <p className="text-gray-500 text-xl mt-8">Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!</p>
        
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                <div className="w-70 h-70 rounded-full bg-orange-100 flex justify-center items-center">
                    <div className="w-60 h-60 rounded-full bg-orange-200 z-2"></div>
                    <img className="absolute w-50 h-auto z-4" src="../src/assets/img/app/app-screen-3.png" alt="firsr app screen" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
