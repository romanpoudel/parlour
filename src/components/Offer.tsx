import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Offer = () => {
    return (
        <div className="relative my-6 h-96 w-full">
            <div className="absolute w-full ">
                <img src="/images/background.jfif" alt="" className="h-96 w-full object-cover"/>
            </div>
            <div className="relative text-white backdrop-filter backdrop-blur  h-full flex flex-col items-center pt-14">
                <div className="font-playfair text-4xl ">We Offer</div>
                <div className="font-playfair text-lg tracking-widest mt-4">
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> 15 days basic course</h2>
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> 30 days intermediate course</h2>
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> Nailart</h2>
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> Hair color course</h2>
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> Advanced course</h2>
                    <h2><span className='mx-4'><ArrowCircleRightIcon /></span> Mehendi course</h2>
                </div>
            </div>
        </div>
    )
}

export default Offer
