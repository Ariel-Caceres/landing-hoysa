

export const ProductsCarrousel = () => {
    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className=" flex w-[80%] justify-between">
                <div className="text-3xl">
                    <span>Productos</span>
                </div>


                <div className="text-5xl gap-5 flex">
                    <button className="">
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button >
                        <i className="fa-regular fa-circle-right "></i>

                    </button>
                </div>
            </div>
        </div>
    )

}