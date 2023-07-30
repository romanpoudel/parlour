import Home from './components/Home'
import Footer from './components/Footer'
// import Navbar from './components/navbar/Navbar'
import DetailServices from './components/services/DetailServices'
import DetailGallery from './components/gallery/DetailGallery'
import DetailProducts from './components/products/DetailProducts'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className='max-w-6xl mx-auto'>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<DetailServices />} />
          <Route path="/gallery" element={<DetailGallery />} />
          <Route path="/products" element={<DetailProducts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
