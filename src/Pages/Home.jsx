import Navbar from '../CommonComponents/Navbar'
import Hero from '../Landing/Hero'
import Products from '../Landing/Products'
import Quality from '../Landing/Quality'
import Video from '../Landing/Video'
import Thumb from '../assets/vidThumb.png'
import Composition from '../Landing/Composition'
import Services from '../Landing/Services'
import TestimonialSlider from '../Landing/TestimonialSlider'
import Partners from '../Landing/Partners'
import Footer from '../CommonComponents/Footer'

function Home() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Quality/>
    <Products/>
    <Video
    videoId="dQw4w9WgXcQ" // YouTube video ID
    thumbnailUrl={Thumb} // Custom thumbnail URL
    />
    <Composition/>
    <Services/> 
    <TestimonialSlider />
    <Partners/>
    <Footer/>
    </>
  )
}

export default Home
