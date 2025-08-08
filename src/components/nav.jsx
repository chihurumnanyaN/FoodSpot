
const Nav = () => {
  return (
    <> 
    <nav className='flex justify-between items-center md:first:pl-10 md:px-15 px-5 py-5 bg-orange-100 font-bold text-lg'>
      <p className="font-extrabold  text-4xl">Food<span className="text-orange-600">Spot.</span></p>
       <ul className="hidden md:flex w-1/2 justify-between items-center gap-5 text-gray-600">
         <li className="hover:text-orange-600"><a href="#about">How it works</a></li>  
         <li className="hover:text-orange-600"><a href="#meals">Meals</a></li> 
         <li className="hover:text-orange-600"><a href="#testimonial">Testimonial</a></li> 
         <li className="hover:text-orange-600"><a href="#pricing">Pricing</a></li> 
      
       <button className="bg-orange-400 text-white hover:bg-orange-600 text-lg w-1/5 px-2 py-2 rounded-lg">Try for free</button>
        </ul>

        <ion-icon name="menu-outline" className="md:hidden text-5xl active:text-orange-600 "></ion-icon>

     </nav>
    </>
  )
}
 
export default Nav