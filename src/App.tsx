import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'

function App() {


  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <Carousel />
      <Services />
      <Gallery />
      <Products />
      <Footer />

    </div>
  )
}

export default App
