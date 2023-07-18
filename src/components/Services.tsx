import ServiceCard from "./ServiceCard"


const Services = () => {
    var items = [
        {
            id: "1",
            image: "images/services/pedicure.jfif",
            title: "Pedicure",
            description:"Foot care treatment including trimming, shaping, and polishing toenails professionally.",
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
            image:"images/services/facial.jfif",
            title:"Facial",
            description:"Skin-focused beauty treatment cleansing, exfoliating, and nourishing face for rejuvenation.",
            price :"$70.9"
        },
        {
            id: "4",
            image:"images/services/nailart.jfif",
            title:"Nailart",
            description:"Creative designs on nails using various techniques, colors, and embellishments.",
            price :"$50.9"
        },
        {
            id:"5",
            image:"images/services/hairstyles.jfif",
            title:"Hair Styles",
            description:"Versatile expressions of personal style through cutting, shaping, and styling hair.",
            price :"$30.9"
        }
        
    ]
    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex flex-col items-center">
                <div className="font-poppins text-2xl underline decoration-pink-500">
                    <text>Our Services</text>
                </div>
                <div className="text-xs">You Will Like To Look Like Goddes Every Day!</div>
            </div>
            <div className="flex flex-row justify-between w-full  overflow-x-auto no-scrollbar my-5">
                {
                    items.map((item) => (<ServiceCard key={item.id} {...item}/>))
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

export default Services
