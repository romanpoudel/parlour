// import Footer from './components/Footer'
import Carousel from "./Carousel"
import Contact from "./Contact"
import Gallery from "./gallery/Gallery"
import Offer from "./Offer"
import Products from "./products/Products"
import Services from "./services/Services"
import Navbar from './navbar/Navbar'

function App() {
    return (
        <div className='max-w-6xl mx-auto'>
                <Navbar />
                <Carousel />
                <Services />
                <Gallery />
                <Products />
                <Offer />
                <Contact />
                {/* <Footer /> */}
        </div>
    )
}

export default App
