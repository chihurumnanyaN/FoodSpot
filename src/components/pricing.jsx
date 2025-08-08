import React from 'react'


const PriceCard = ({ price ,isPro, planType, monthPrice, feature1 , feature2 ,feature3 ,feature4 }) => {
  return(
    <div className={`flex flex-col justify-center items-center gap-5 w-4lg border border-orange-300 rounded-lg p-10 ${isPro ? 'bg-orange-100 border-0' : 'bg-white'}`}>

        <p className="text-orange-500 text-2xl font-bold uppercase" >{planType}</p>
        <h3 className="text-black text-4xl font-extrabold ">$<span className="text-black text-6xl">{price}</span></h3>
        <p className="text-gray-600 texl-2xl">per month. That's just ${monthPrice} per meal</p>
           <ul className="space-y-2 text-left inline-block w-fit">
          <li className=" items-center gap-2 px-3 py-1 text-gray-600 ">
            <ion-icon
              name="checkmark-outline"
              class="text-orange-500 w-6 h-6"
            ></ion-icon>
            <span>  </span>
            <span className="text-xl ">{feature1}</span>
          </li>
                    <li className=" items-center gap-2 px-3 py-1 text-gray-600 ">
            <ion-icon
              name="checkmark-outline"
              class="text-orange-500 w-6 h-6"
            ></ion-icon>
            <span>  </span>
            <span className="text-xl ">{feature2}</span>
          </li>
                    <li className=" items-center gap-2 px-3 py-1 text-gray-600 ">
            <ion-icon
              name="checkmark-outline"
              class="text-orange-500 w-6 h-6"
            ></ion-icon>
            <span>  </span>
            <span className="text-xl ">{feature3}</span>
          </li>
                    <li className=" items-center gap-2 px-3 py-1 text-gray-600 ">
            <ion-icon
              name="checkmark-outline"
              class="text-orange-500 w-6 h-6"
            ></ion-icon>
            <span>  </span>
            <span className="text-xl ">{feature4}</span>
          </li>
      </ul>
                  <button className='p-3 h-12 rounded-md font-extrabold text-xl w-60 text-white bg-orange-500'>
             Start Eating Well
            </button>
    </div>
  )
}

const Expect = ({iconName, heading, about}) => {
 
  return(
    <div className="flex flex-col justify-start items-start gap-4 w-60">
    <ion-icon name={iconName} class="text-orange-500 text-3xl bg-orange-100 rounded-full p-5"></ion-icon>
      <h2 className="text-2xl text-gray-700 font-bold">{heading}</h2>
      <p className="text-xl text-gray-600 ">{about}</p>
      </div>
  )
}

const Pricing = () => {
  return (
    <section id="pricing" className="flex flex-col justify-center items-center py-20 pt-20 px-5 md:px-20 gap-10" >
              <div className="flex flex-col justify-center items-start gap-5 w-full  ">
        <p className="text-orange-500 font-bold" >PRICING</p>
        <h1 className="text-5xl font-bold text-gray-700">Eating well without breaking the bank</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-20">
          <PriceCard
            price="337"
            isPro={false}
            planType="Starter"
            monthPrice=" $13.23"
            feature1="2 meals per day" 
            feature2="Order 24/7"
            feature3="Delivery is free"
            feature4="Get access to latest recipes"
            />

            
          <PriceCard
            price="697"
            isPro={true}
            planType="pro"
            monthPrice="11.23"
            feature1="2 meals per day" 
            feature2="Order 24/7"
            feature3="Delivery is free"
            feature4="Get access to latest recipes"
            />
        </div>
        <p className="text-gray-700 text-sm">Prices include all applicable taxes. Users can cancel at any time. Both plans include the following</p>
    
        <div className="flex flex-col md:flex-row justify-center item-center gap-10 mt-20">
          <Expect
            iconName="flame"
            heading="Never cool again!"
            about="Our subscriptions cover 365 days per year, even including major holidays"
            />
                      <Expect
            iconName="nutrition-outline"
            heading="Local and Organic"
            about="Our cooks only use local use local, fresh, and organic products to prepare your meals."
            />

                      <Expect
            iconName="leaf"
            heading="No waste"
            about="All our partners only use reusable containers to package all your meals."
            />

                      <Expect
            iconName="pause"
            heading="Pause anytime"
            about="Going on vacation? Just pause your subscription, and we refund unused days."
            />
            </div>
    </section>
  )
}

export default Pricing
