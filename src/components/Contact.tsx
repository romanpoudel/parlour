import PhoneIcon from '@mui/icons-material/Phone';


const Contact = () => {
    return (
        <div id="contact" className="flex flex-col  ">
            <div className="font-poppins text-2xl  text-center">
                <text>Contact Us</text>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mx-4 top-0">
                <div className="mt-4">
                    <form className="flex flex-col gap-4 ">
                        <input type="text" placeholder="Name" className="bg-gray-100 rounded-sm py-2 w-80 sm:w-96 pl-4 focus:outline-none" />
                        <input type="email" placeholder="Email" className="bg-gray-100 rounded-sm py-2 w-80 sm:w-96 pl-4 focus:outline-none" />
                        <textarea placeholder="Message" className="bg-gray-100 rounded-sm py-2 w-80 sm:w-96 pl-4 focus:outline-none" />
                        <div className="mx-auto my-2">
                            <button type="submit"
                                className="text-white bg-pink-500 font-bold font-poppins text-xl rounded-full px-8 py-1">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center h-[200px] ">
                        <div className="flex items-center my-4"><hr className="border-2 border-x-8 border-pink-500 w-12" /><span className="mx-3 font-semibold">OR</span><hr className="w-12 border-2 border-x-8 border-pink-500" /></div>
                        <div className="text-pink-500 font-bold"><a href="tel:+9779861948036"><PhoneIcon /><span className='ml-2 font-bold'>9842843976</span></a></div>
                        <div className="flex my-3">
                            <div>
                                <a href="https://www.facebook.com/shreejabeautyparlour">
                                    <img src="/images/facebook.svg" alt="facebook" className=" h-10 w-10" />
                                </a>
                            </div>
                            <div>
                                <a href="https://www.tiktok.com/@shreejabeautyparlour__00">
                                    <img src="/images/tiktok.svg" alt="tiltok" className="h-10 w-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4796693896556!2d86.6977869749945!3d26.792851365232142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eec3e71ab5cb1d%3A0x9868036624a4893e!2sshreeja%20beauty%20parlour%20and%20training%20centre!5e0!3m2!1sen!2snp!4v1689356500881!5m2!1sen!2snp"
                        width="400"
                        height="432"
                        // loading="lazy"
                        className="my-4"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
}
export default Contact
