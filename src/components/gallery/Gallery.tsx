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

        }

    ]
    return (
        <div id="gallery" className="flex flex-col items-center mt-6">
            <div className="font-poppins text-2xl underline decoration-pink-500">
                <p>Gallery</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-7 w-full px-4 md:px-0">
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
            <div>
                <Link to="gallery">
                    <button type="button"
                        className="text-white bg-pink-500 font-bold font-poppins text-xl rounded-full px-8 py-2">
                        See More
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Gallery
