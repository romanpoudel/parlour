import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <div className='h-[365px]'>
        <Carousel />
      </div>
      
    </div>
  )
}

export default App
