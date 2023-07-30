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
export default SingleProduct