import { Link } from "react-router-dom"
import SingleProduct from "./SingleProduct"

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
        },
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
        },
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
        },
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
        },
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
        <div id="products" className="flex flex-col items-center ">
            <div className="max-w-6xl font-poppins text-2xl underline decoration-pink-500 fixed z-20 top-0 bg-white w-full flex flex-col items-center justify-center h-14 bg-opacity-95">
                <Link to="/"><p className="absolute text-base left-2 font-mono font-light text-gray-600 mt-1"><span className="font-bold pr-1">&lt;</span>Back</p></Link>
                <p>Available Products</p>
            </div>
            <div className="grid grid-cols-2  px-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 gap-x-10 sm:gap-x-16 my-7 w-full mt-16">
                {
                    items.map(
                        (item) =>
                        (
                            <SingleProduct key={item.id} {...item} />
                        ))
                }
            </div>
        </div>
    )
}

export default Products
