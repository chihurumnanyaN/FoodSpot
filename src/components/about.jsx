import React from "react";

// Import logos
import forbes from "../assets/img/logos/forbes.png";
import usaToday from "../assets/img/logos/usa-today.png";
import techcrunch from "../assets/img/logos/techcrunch.png";
import businessInsider from "../assets/img/logos/business-insider.png";
import nytimes from "../assets/img/logos/the-new-york-times.png";

// Import app images
import appScreen1 from "../assets/img/app/app-screen-1.png";
import appScreen2 from "../assets/img/app/app-screen-2.png";
import appScreen3 from "../assets/img/app/app-screen-3.png";

const Companies = () => {
  const CompaniesLogo = [
    { src: forbes, alt: "forbes 1" },
    { src: usaToday, alt: "usa-today 2" },
    { src: techcrunch, alt: "techcrunch 3" },
    { src: businessInsider, alt: "business-insider 4" },
    { src: nytimes, alt: "the new york times 5" },
  ];

  const style = "h-8 w-auto object-contain filter grayscale";

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <p className="text-gray-600 font-bold">AS FEATURED IN</p>
      <div className="flex flex-row justify-center items-center gap-10 mt-4 mb-10 flex-wrap">
        {CompaniesLogo.map((company, index) => (
          <img key={index} src={company.src} alt={company.alt} className={style} />
        ))}
      </div>
    </div>
  );
};

const Step = ({ number, title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col mt-30 md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-10 px-6 md:px-20 py-10`}>
      <div className="md:w-1/2">
        <p className="text-8xl font-bold text-gray-300">{number}</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-6">{title}</h3>
        <p className="text-gray-500 text-xl mt-8">{description}</p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative">
        <div className="w-[280px] h-[280px] rounded-full bg-orange-100 flex justify-center items-center relative z-0">
          <div className="w-[240px] h-[240px] rounded-full bg-orange-200 z-10"></div>
          <img className="absolute w-[200px] h-auto z-20" src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Companies />
      <div className="flex flex-col px-6 md:px-20 mt-20">
        <p className="capitalize text-orange-600 font-bold">HOW IT WORKS</p>
        <h1 className="text-4xl md:text-5xl text-gray-800 font-extrabold mt-5">
          Your daily dose of health in 3 simple steps
        </h1>
      </div>
      <section>
        <Step
          number="01"
          title="Tell us what you like (and what not)"
          description="Never again waste time thinking about what to eat! FoodSpot AI will create a 100% personalized weekly meal plan just for you."
          image={appScreen1}
        />
        <Step
          number="02"
          title="Approve your weekly meal plan"
          description="Once per week, approve the meal plan generated for you by FoodSpot AI. You can change ingredients or add your own recipes."
          image={appScreen2}
          reverse
        />
        <Step
          number="03"
          title="Receive meals at convenient time"
          description="Best chefs in town will cook your selected meal every day, and deliver it to your door. You can update your schedule daily!"
          image={appScreen3}
        />
      </section>
    </>
  );
};

export default About;
