import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About';
import OurProducts from './Pages/OurProducts';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import OurServices from './Pages/OurServices';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 200,
      once: true,
  });
  }, [])

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/aboutus' element={<About />} />
            <Route path='/about/services' element={<OurServices />} />
            <Route path='/shop/productList' element={<OurProducts />} />
            <Route path='/shop/productDetails' element={<ProductDetails />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
