
import { products } from "../data/products"

export const ProductsCarrousel = () => {

    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className=" flex md:w-[70%] w-[90%] justify-between py-6 items-center">
                <div className="text-xl sm:text-3xl">
                    <span>Productos</span>
                </div>
                <div className="border-b-2 border-gray-400 block w-[70%]">

                </div>
                <div className="xl:text-5xl md:text-3xl sm:text-3xl text-3xl gap-5 flex">
                    <button className="cursor-pointer">
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button className="cursor-pointer">
                        <i className="fa-regular fa-circle-right "></i>
                    </button>
                </div>
            </div>


            <div className="w-full justify-center flex ">
                <div className="flex w-[95%] xl:w-[80%] justify-between xl:w[90%] gap-6 overflow-scroll scroll-auto">
                    {products.map((p, i) =>
                        <div className="w-[20%] xl:min-w-[30%] flex flex-col bg-marron-claro overflow-hidden gap-5 p-3 rounded-2xl" key={i}>
                            <div className="text-center py-2">
                                <span>{p.nombre}</span>
                            </div>
                            <div className="rounded-[50%] overflow-hidden  w-full">
                                <img src={p.img} alt="" className="w-full h-full" />
                            </div>
                            <div>
                                <span>Precio:  </span>
                                <span> ${p.precio}</span>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )

}