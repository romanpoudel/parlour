import Carousel from './components/Carousel'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {


  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <Carousel />
      <Services />
      <Gallery />

    </div>
  )
}

export default App
