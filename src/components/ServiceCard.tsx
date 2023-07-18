
const ServiceCard = (props:any) => {
    return (
        <div className="flex flex-col items-center">
            <div className="rounded-full">
                <img
                    src={props.image}
                    alt={props.id}
                    className="rounded-full w-36 h-36 object-cover border-4 border-pink-200"
                />
            </div>
            <div className="p-1"><h2 className="font-poppins text-pink-500">{props.title}</h2></div>
            <div className="text-center text-sm line-clamp-3 w-44">{props.description} </div>
            <div><h2 className="text-pink-500 font-semibold leading-relaxed">{props.price}</h2></div>
        </div>
    )
}

export default ServiceCard
