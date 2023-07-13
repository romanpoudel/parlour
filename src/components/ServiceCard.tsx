
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
            <div className="p-1"><text className="font-poppins text-pink-500">{props.title}</text></div>
            <div className="text-center text-sm line-clamp-3"><text>{props.description} </text></div>
            <div><text className="text-pink-500 font-semibold leading-relaxed">{props.price}</text></div>
        </div>
    )
}

export default ServiceCard
