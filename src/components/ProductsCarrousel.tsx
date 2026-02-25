
import { products } from "../data/products"
import { useRef, useState } from "react";
import type { Product } from "../types/product.entity";
import { useWhatsapp } from "../hooks/useWhatsapp";

export const ProductsCarrousel = ({ product }: { product: string }) => {
    const { contactProduct } = useWhatsapp()
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showProducts] = useState<Product[]>(
        products.filter(p => {
            if (product === "granja") {
                return p.tipo === "granja" || p.tipo === "verdura"
            }

            return p.tipo === product
        })
    )

    console.log();

    showProducts.sort((a, b) => {
        const aHasOfer = Boolean(a.oferta)
        const bHasOfer = Boolean(b.oferta)
        return Number(bHasOfer) - Number(aHasOfer)

    })


    // const normalizer: Record<string, string> = {
    //     "chupachups": "Chupachups",
    //     "pollo-trozado": "Pollo Trozado",
    //     "carne-picada": "Picada de Pollo",
    //     "pollo-entero": "Pollo Entero",
    //     "huevo": "Huevo",
    //     "zanahoria": "Zanahoria",
    //     "papa": "Papa",
    //     "pata-y-muslo": "Pata y muslo",
    //     "pechuga": "Pechuga",
    //     "cebolla": "cebolla"

    // }

    // const contactProduct = (product: string) => {

    //     const message = (`Hola, quiero pedir ${normalizer[product]}`)
    //     const url = `https://wa.me/541171416222?text=${encodeURIComponent(message)}`;
    //     window.open(url, "_blank")
    // }

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
            <div className=" flex md:w-[70%]  w-[90%] justify-between py-6 items-center ">
                <div className="text-xl sm:text-3xl w-[50%] shadow-top-sm ">
                    <span>{product} {product == "pollo" ? "🐔" : product == "granja" ? "🥚🍅" : ""}</span>
                </div>
                {/* <div className="border-b-2 border-gray-300 block w-full">

                </div> */}
                <div className="xl:text-5xl md:text-3xl sm:text-3xl text-3xl gap-2 flex">
                    <button className="cursor-pointer" onClick={scrollLeft}>
                        <i className="fa-regular fa-circle-left"></i>
                    </button>
                    <button className="cursor-pointer" onClick={scrollRight}>
                        <i className="fa-regular fa-circle-right "></i>
                    </button>
                </div>
            </div>


            <div className={`w-full justify-center flex `} >
                <div ref={carouselRef} className={`p-3 rounded-lg gap-6 snap-x snap-mandatory  flex w-[95%] xl:w-[80%] justify-between  overflow-x-auto overflow-y-hidden    `}>
                    {showProducts.map((p, i) =>
                        <div className={`
                             w-[75%] sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[25%]  relative hover:shadow-lg hover:shadow-black
                              flex flex-col   shrink-0 hover:bg-white bg-blanco border border-gray-300  active:scale-95 active:bg-white
                               active:border-gray-400  transition-all duration-200 rounded-xl overflow-hidden gap-4 p-4`}
                            key={i}>
                            <div className="text-center py-2  xl:text-xl lg:text-lg md:text-md">
                                <span>{p.nombre}</span>
                            </div>
                            <div className=" overflow-hidden object-cover object-[center_10%] justify-center flex w-full">
                                <img src={p.img} alt="" className="w-50 h-50 rounded-xl" />
                            </div>
                            <div>
                                <span>stock:</span>

                                <span className={p.stock == "disponible" ? "text-green-600" : "text-rojo"}> {p.stock}</span>
                            </div>
                            <div className="">
                                <span className="text-sm">Precio x {p.venta}:  </span>
                                <span className="p-2 bg-blue-500 text-md text-white rounded-xl"> ${p.precio}</span>
                            </div>
                            <div className="w-full flex justify-center p-2 border-2 active:bg-white bg-blanco rounded-xl" onClick={() => contactProduct(p.nombre, "karina", true)}>
                                <button className="">Pedir </button>
                            </div>

                            {p.oferta !== false &&
                                <div className="absolute top-20 left-4 bg-rojo text-white p-2 rounded-xl animate-pulse active:animate-bounce">
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