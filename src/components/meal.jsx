import React from "react";

import Meal1 from "../assets/img/meals/meal-1.jpg";
import Meal2 from "../assets/img/meals/meal-2.jpg";

const MealCards = ({
  img,
  type,
  type1,
  name,
  nutriscore,
  calories,
  rating,
}) => {
  const Iconstyle = "text-orange-500 text-sm w-6 h-6 ";
  return (
  <div className="flex flex-col justify-center items-start gap-3 mt-20 bg-white rounded-2xl shadow-lg w-80 h-130 pb-4">
    <img className="w-auto rounded-t-2xl" src={img} alt={name} />

    <ul className="flex gap-2 w-fit pl-5  mt-4">
      <li className="bg-green-500 rounded-xl text-sm px-2 py-0.5 inline-block">
        {type}
      </li>
      {type1 && (
        <li className="bg-yellow-400 rounded-xl text-sm px-2 py-0.5 inline-block">
          {type1}
        </li>
      )}
    </ul>

    <h3 className="font-bold w-fit mt-0 pl-5 text-xl text-gray-700 ">{name}</h3>

    <ul className="flex flex-col gap-4 mt-4 pl-5 text-xl  text-gray-700 w-fit">
      <li className="flex items-center gap-2">
        <ion-icon name="flame-outline" className={Iconstyle}></ion-icon>
        <span className="font-bold">{calories}</span> calories
      </li>
      <li className="flex items-center gap-2">
        <ion-icon name="restaurant-outline" className={Iconstyle}></ion-icon>
        nutriscore® <span className="font-bold">{nutriscore}</span>
      </li>
      <li className="flex items-center gap-2">
        <ion-icon name="star-outline" className={Iconstyle}></ion-icon>
        <span className="font-bold">{rating}</span> rating
      </li>
    </ul>
  </div>
);
}

const Diets = () => {
  const diets = [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Gluten-Free",
    "Lactose-Free",
    "Keto",
    "Paleo",
    "Low FODMAP",
    "Kid Friendly",
  ];
  return (
    <div className="flex flex-col justify-center pt-18 w-fit">
      <h3 className="text-3xl font-bold text-gray-600 mb-4">
        Works with any diet:
      </h3>
      <ul className="space-y-2 text-left inline-block w-fit">
        {diets.map((diet, index) => (
          <li key={index} className=" items-center gap-2 px-3 py-1 text-gray-600 ">
            <ion-icon
              name="checkmark-outline"
              class="text-orange-500 w-6 h-6"
            ></ion-icon>
            <span>  </span>
            <span className="text-xl ">{diet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Meal = () => {
  return (
    <>
      <div className={"flex flex-col justify-center items-center mt-20   "}>
        <p className="text-orange-500 font-bold">MEALS</p>
        <h1 className="text-5xl font-extrabold text-gray-600">
          FoodSpot AI Chooses from 5000+ recipes
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-15 mt-10 mb-20 px-20 flex-wrap">
        <MealCards
          img={Meal1}
          type="Vegetarian"
          name="Japanese Gyozas"
          nutriscore="72"
          calories="250"
          rating="4.8"
        />
        <MealCards
          img={Meal2}
          type="vegan"
          type1="
paleo"
          name="Avocado Salad"
          nutriscore="95"
          calories="250"
          rating="4.8"
        />
        <Diets />
        <div>
          <a className="hover:underline text-lg font-medium text-orange-500" href="">See all recipes →</a>
        </div>
      </div>
    </>
  );
};

export default Meal;
