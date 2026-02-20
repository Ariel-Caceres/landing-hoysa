
import { products } from "../data/products"
import { useRef, useState } from "react";
import type { Product } from "../types/product.entity";

export const ProductsCarrousel = ({ product }: { product: string }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [message, setMessage] = useState<string>("")
    const [showProducts] = useState<Product[]>(products.filter(p => p.tipo == product))
    const normalizer: Record<string, string> = {
        "chupachups": "Chupachups",
        "pollo-trozado": "Pollo Trozado",
        "carne-picada": "Picada de Pollo",
        "pollo-entero": "Pollo Entero",
        "huevo": "Huevo"

    }

    const contactProduct = (product: string) => {
        setMessage(`Hola quiero pedir ${normalizer[product]}`)
        const url = `https://wa.me/541171416222?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank")
    }

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -500, behavior: "smooth" })
        }
    }
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }



    return (
        <div className="w-full justify-center items-center flex flex-col">
            <div className=" flex md:w-[70%]  w-[90%] justify-between py-6 items-center">
                <div className="text-xl sm:text-3xl">
                    <span>{product}</span>
                </div>
                <div className="border-b-2 border-gray-400 block w-[70%]">

                </div>
                <div className="xl:text-5xl md:text-3xl sm:text-3xl text-3xl gap-2 flex">
                    <button className="cursor-pointer" onClick={scrollLeft}>
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button className="cursor-pointer" onClick={scrollRight}>
                        <i className="fa-regular fa-circle-right "></i>
                    </button>
                </div>
            </div>


            <div className="w-full justify-center flex ">
                <div ref={carouselRef} className="snap-x snap-mandatory  flex w-[95%] xl:w-[80%] justify-between xl:w[90%] overflow-x-auto overflow-y-hidden  gap-6  ">
                    {showProducts.map((p, i) =>
                        <div className="relative hover:shadow-2xl hover:shadow-black flex flex-col w-[65%] sm:w-[45%] md:w-[30%] lg:w-[25%] xl:w-[20%] shrink-0 bg-blanco border shadow-lg active:scale-95 active:bg-white active:border-gray-400  transition-all duration-200 rounded-2xl overflow-hidden gap-4 p-4"
                            key={i}>
                            <div className="text-center py-2  xl:text-xl lg:text-lg md:text-md">
                                <span>{normalizer[p.nombre]}</span>
                            </div>
                            <div className=" overflow-hidden object-cover object-[center_10%] justify-center flex w-full">
                                <img src={p.img} alt="" className="w-50 h-50 rounded-2xl" />
                            </div>
                            <div>
                                <span>stock:</span>

                                <span className={p.stock == "disponible" ? "text-green-600" : "text-rojo"}> {p.stock}</span>
                            </div>
                            <div>
                                <span>Preci0 x {p.venta}:  </span>
                                <span className="p-2 bg-blue-500 text-md text-white rounded-2xl"> ${p.precio}</span>
                            </div>
                            <div className="w-full flex justify-center p-2 border-2 active:bg-white" onClick={() => contactProduct(p.nombre)}>
                                <button className="">Pedir</button>
                            </div>

                            {p.oferta !== false &&
                                <div className="absolute top-20 left-4 bg-rojo text-white p-2 rounded-2xl animate-pulse active:animate-bounce">
                                    <span>!Oferta!</span>
                                    <p>{p.oferta}</p>

                                </div>
                            }
                        </div>

                    )}
                </div>
            </div>
        </div >
    )

}