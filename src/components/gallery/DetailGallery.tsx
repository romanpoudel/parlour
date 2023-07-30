import { Link } from "react-router-dom"


const Gallery = () => {
    var items = [
        {
            id: "1",
            image: "images/services/pedicure.jfif",
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
        },
        {
            id: "3",
            image: "images/services/facial.jfif",

        },
        {
            id: "4",
            image: "images/services/nailart.jfif",

        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "6",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "1",
            image: "images/services/pedicure.jfif",
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
        },
        {
            id: "3",
            image: "images/services/facial.jfif",

        },
        {
            id: "4",
            image: "images/services/nailart.jfif",

        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "6",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "1",
            image: "images/services/pedicure.jfif",
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
        },
        {
            id: "3",
            image: "images/services/facial.jfif",

        },
        {
            id: "4",
            image: "images/services/nailart.jfif",

        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "6",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "1",
            image: "images/services/pedicure.jfif",
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
        },
        {
            id: "3",
            image: "images/services/facial.jfif",

        },
        {
            id: "4",
            image: "images/services/nailart.jfif",

        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "6",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "1",
            image: "images/services/pedicure.jfif",
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
        },
        {
            id: "3",
            image: "images/services/facial.jfif",

        },
        {
            id: "4",
            image: "images/services/nailart.jfif",

        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",

        },
        {
            id: "6",
            image: "images/services/hairstyles.jfif",

        }

    ]
    return (
        <div id="gallery" className="flex flex-col items-center mt-6">
            <div className="max-w-6xl font-poppins text-2xl underline decoration-pink-500 fixed z-20 top-0 bg-white w-full flex flex-col items-center justify-center h-14 bg-opacity-95">
                <Link to="/"><p className="absolute text-base left-2 font-mono font-light text-gray-600"><span className="font-bold pr-1">&lt;</span>Back</p></Link>
                <p>Gallery</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-7 mt-10 w-full px-4 md:px-0">
                {
                    items.map(
                        (item) =>
                        (<img
                            key={item.id}
                            src={item.image}
                            alt=""
                            className=" w-[360px] h-[214px] hover:shadow-md hover:scale-105 object-cover "
                        />))
                }
            </div>
          
        </div>
    )
}

export default Gallery
