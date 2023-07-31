import { Link } from "react-router-dom"
import ServiceCard from "./ServiceCard"

const DetailServices = () => {
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
        }

    ]
    return (
        <div>
            <div id="services" className="flex flex-col items-center mt-4">
                <div className="max-w-6xl flex flex-col items-center fixed z-20 top-0 bg-white w-full  justify-center h-14 bg-opacity-95">
                    <Link to="/"><p className="absolute text-base left-2 font-mono font-light text-gray-600 mt-3"><span className="font-bold pr-1">&lt;</span>Back</p></Link>
                    <div className="flex flex-col items-center">
                        <div className="font-poppins text-2xl underline decoration-pink-500">
                            <p>Our Services</p>
                        </div>
                        <div className="text-xs">You Will Like To Look Like Goddes Every Day!</div>
                    </div>
                </div>
                <div className="flex flex-row justify-between flex-wrap my-5 mt-16 gap-5">
                    {
                        items.map((item) => (<ServiceCard key={item.id} {...item} />))
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailServices
