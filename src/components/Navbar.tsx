
const Navbar = () => {
    return (
        <div className="flex  justify-between h-[60px]">
            <div className="flex items-center">
                <div className="w-[78px] h-[43px]">
                    <img src="../../public/parlourlogo.png" alt="Logo" />
                </div>
                <div className="font-playfair font-bold text-xl text-pink-500">
                    Shreeja Beauty Parlour
                </div>
            </div>
            <div className="flex items-center gap-14">
                <div>Home</div>
                <div>Services</div>
                <div>Gallery</div>
                <div>Products</div>
                <div>Trainings</div>
                <div>Contact Us</div>
            </div>

        </div>
    )
}

export default Navbar