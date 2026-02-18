
import { products } from "../data/products"
import { useRef } from "react";
export const ProductsCarrousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);


    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scroll({ left: -500, behavior: "smooth" })
        }
    }
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scroll({ left: 300, behavior: "smooth" })
        }
    }
    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className=" flex md:w-[70%]  w-[90%] justify-between py-6 items-center">
                <div className="text-xl sm:text-3xl">
                    <span>Productos</span>
                </div>
                <div className="border-b-2 border-gray-400 block w-[70%]">

                </div>
                <div className="xl:text-5xl md:text-3xl sm:text-3xl text-3xl gap-5 flex">
                    <button className="cursor-pointer" onClick={scrollLeft}>
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button className="cursor-pointer" onClick={scrollRight}>
                        <i className="fa-regular fa-circle-right "></i>
                    </button>
                </div>
            </div>


            <div className="w-full justify-center flex ">
                <div className="flex w-[95%] xl:w-[80%] justify-between xl:w[90%] overflow-scroll overflow-y-hidden  z-0 gap-6  ">
                    {products.map((p, i) =>
                        <div className="  flex flex-col md:w-[30%] w-[50%] shrink-0 sm:w-[30%] z-20 justify-between bg-blanco border shadow-2xl hover:-translate-y-1 transition-all ease-in-out duration-150 cursor-pointer hover:shadow-black overflow-hidden gap-5 p-3 rounded-2xl" key={i}>
                            <div className="text-center py-2">
                                <span>{p.nombre}</span>
                            </div>
                            <div className="rounded-[40%] overflow-hidden object-cover object-[center_10%] w-full">
                                <img src={p.img} alt="" className="w-full h-full" />
                            </div>
                            <div>
                                <span>Precio:  </span>
                                <span> ${p.precio}</span>
                            </div>
                            <div>
                                <span>stock:</span>

                                <span className={p.stock == "disponible" ? "text-azul" : "text-rojo"}> {p.stock}</span>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div >
    )

}