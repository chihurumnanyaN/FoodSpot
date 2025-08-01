
const Nav = () => {
  return (
    <> 
    <nav className='flex justify-between items-center first:pl-10 px-15 py-5 bg-orange-100 font-bold text-lg'>
      <p className="font-extrabold  text-4xl">Food<span className="text-orange-600">Spot.</span></p>
       <ul className="flex w-1/2 justify-between items-center gap-5 text-gray-600">
         <li className="hover:text-orange-600">How it works</li>
         <li className="hover:text-orange-600">Meals</li>
         <li className="hover:text-orange-600">Testimonal</li>
         <li className="hover:text-orange-600">Pricing</li>
      
       <button className="bg-orange-400 text-white hover:text-orange-600 text-lg w-1/5 px-2 py-2 rounded-lg">Try for free</button>
        </ul>
     </nav>
    </>
  )
}
 
export default Nav