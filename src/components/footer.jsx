import React from 'react'

const Footer = () => {

    const spanstyles = "font-bold md:text-xl text-gray-700";
    const ulstyles = "text-gray-600 flex flex-col gap-5 text-sm mt-2";
  return (
    <>
    <footer className="flex flex-col justify-center items-center gap-4 md:gap-6 border-t border-t-gray-300 text-gray-600">

        <div className="flex flex-col md:flex-row md:justify-center items-start pl-5 gap-20 w-full mt-25" >
        <div className="flex flex-col justify-center items-start gap-4 ">
              <p className="font-extrabold  text-4xl">Food<span className="text-orange-600">Spot.</span></p>
            
            <ul className="flex gap-4 text-xl mt-4 text-gray-600">
                <li>
                    <a href="https://x.com/ChihurumnanyaN">
<ion-icon name="logo-twitter"></ion-icon></a>
                </li>
                <li>
                    <a href="https://github.com/chihurumnanyaN">
<ion-icon name="logo-github"></ion-icon></a>
                </li>
                <li>
                    <a href="https://facebook.com/chihurumnanya15"><ion-icon name="logo-facebook"></ion-icon></a>
                </li>
            </ul>
             
             <p className="text-left text-lg text-gray-500 mt-8">
  Built with ⚛️ React by <br/> <span className="font-semibold">ChihurumnanyaN</span>
</p>
        </div>


         <ul className={ulstyles}>
            <li> <span class={spanstyles}>Contact Us</span> </li>
            <li>623 Harrison St., 2nd Floor, <br/>San Francisco, CA 94107</li>
            <li>
                <ul>
                    <li>+234 702 506 3316</li>
                    <li>Chihurumnanya15@gmail.com</li>
                </ul>

            </li>
         </ul>

         <ul className={ulstyles}>
            <li> <span class={spanstyles}>Accounting</span></li>
           <li> Create Account</li>
            <li> Sign In</li>
            <li> iOS app</li>
            <li> Android app</li>
         </ul>

         <ul className={ulstyles}>
            <li> <span class={spanstyles}>Company</span></li>
            <li>About foodspot</li>
            <li>cooking partners</li>
            <li>Careers</li>
         </ul>

         <ul className={ulstyles}>
            <li><span class={spanstyles}>Resources</span></li>
            <li>Recipe Directory</li>
            <li>Help Center</li>
            <li>Privacy and Terms</li>
         </ul>
        </div>
       <div className="flex justify-center items-center w-full gap-4 mb-20 mt-10">
  <a
    className="underline text-lg font-medium text-orange-500 mb-20 mt-10"
    href="#"
  >
    Back to top ⇑
  </a>
</div>

      </footer>
    </>
  )
}

export default Footer
