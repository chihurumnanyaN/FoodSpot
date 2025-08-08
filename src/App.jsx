
import './App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Meal from './components/meal'
import TestimonialsPage from './components/testimonials'
import Pricing from './components/pricing'
import Contact from './components/contact'
import Footer from './components/footer'

const App  = () => {
  
  return (
    <>
     <Nav />
      <Hero />
      <Meal/>
      <TestimonialsPage/>
       <Pricing/>
      <Contact/>
      <Footer/>
     
    </>
  )
}

export default App
