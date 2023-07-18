
const Products = () => {
    var items = [
        {
            id: "1",
            image: "images/services/pedicure.jfif",
            title: "Pedicure",
            description: "Foot care treatment including trimming, shaping, and polishing toenails professionally.",
            price: "$44.9"
        },
        {
            id: "2",
            image: "images/services/eyebrow.jfif",
            title: "Eyebrow",
            description: "Facial feature above eyes, shaped, groomed, and enhanced for expression.",
            price: "$40.9"
        },
        {
            id: "3",
            image: "images/services/facial.jfif",
            title: "Facial",
            description: "Skin-focused beauty treatment cleansing, exfoliating, and nourishing face for rejuvenation.",
            price: "$70.9"
        },
        {
            id: "4",
            image: "images/services/nailart.jfif",
            title: "Nailart",
            description: "Creative designs on nails using various techniques, colors, and embellishments.",
            price: "$50.9"
        },
        {
            id: "5",
            image: "images/services/hairstyles.jfif",
            title: "Hair Styles",
            description: "Versatile expressions of personal style through cutting, shaping, and styling hair.",
            price: "$30.9"
        },
        {
            id: "6",
            image: "images/services/facial.jfif",
            title: "Facial",
            description: "Skin-focused beauty treatment cleansing, exfoliating, and nourishing face for rejuvenation.",
            price: "$70.9"
        },
        {
            id: "7",
            image: "images/services/nailart.jfif",
            title: "Nailart",
            description: "Creative designs on nails using various techniques, colors, and embellishments.",
            price: "$50.9"
        },
        {
            id: "8",
            image: "images/services/hairstyles.jfif",
            title: "Hair Styles",
            description: "Versatile expressions of personal style through cutting, shaping, and styling hair.",
            price: "$30.9"
        }

    ]
    return (
        <div className="flex flex-col items-center mt-6">
            <div className="font-poppins text-2xl underline decoration-pink-500">
                <text>Available Products</text>
            </div>
            <div className="grid grid-cols-2  px-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-x-10 sm:gap-x-16 my-7 w-full">
                {
                    items.map(
                        (item) =>
                        (
                            <SingleProduct key={item.id} {...item} />
                        ))
                }
            </div>
            <div>
                <button type="button"
                    className="text-white bg-pink-500 font-bold font-poppins text-xl rounded-full px-8 py-1">
                    See More
                </button>
            </div>
        </div>
    )
}

export default Products

const SingleProduct = (props: any) => {
    return (
        <div>
            <div>
                <img
                    src={props.image}
                    alt=""
                    className="w-full h-52 md:h-80 hover:shadow-lg hover:scale-105 object-cover "
                />
            </div>
            <div className="flex flex-col items-center py-4 ">
                <div className="text-pink-500 font-poppins">{props.price}</div>
                <div className="font-semibold">{props.title}</div>
            </div>
        </div>
    )
}