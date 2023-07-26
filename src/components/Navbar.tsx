import MenuIcon from '@mui/icons-material/Menu';
import Navlinks from './Navlinks';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="flex items-center  justify-between py-2  sticky top-0 z-20 bg-white">
            <div className="flex items-center">
                <div className="w-[78px] h-[43px]">
                    <img src="/parlourlogo.png" alt="Logo" />
                </div>
                <div className="font-playfair font-bold text-xl text-pink-500 hidden sm:block md:hidden lg:block">
                    <a href='/'> Shreeja Beauty Parlour</a>
                </div>
            </div>

            {
                isOpen &&
                <div className='absolute top-12 md:hidden py-24 flex justify-center w-full h-[100vh] z-10 bg-white'>
                    <Navlinks />
                </div>
            }
            <div className='md:hidden mr-4' onClick={handleMenu}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className="hidden md:flex mr-4">
                <Navlinks />
            </div>

        </div>
    )
}

export default Navbar
