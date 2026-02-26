import { Banner } from "../components/Banner"
import { NavBar } from "../components/NavBar"
import { products } from "../data/products"
import { useWhatsapp } from "../hooks/useWhatsapp"
import { useSearchParams } from "react-router-dom"
export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const categories = [...new Set(products.map(p => p.tipo))]
    const { contactProduct } = useWhatsapp()
    const categoria = searchParams.get("categoria") ?? "todos"

    const searchParamsCategory = (category: string) => {

        setSearchParams({
            categoria: category
        })
    }

    const filteredProducts =
        categoria == "todos" ? products : products.filter(p => p.tipo == categoria)



    return (
        <div className="flex justify-center flex-col items-center">
            <Banner />
            <NavBar />
            <div className=" p-4 justify-center flex border-t border-black border-b   text-2xl sm:text-3xl w-[95%] xl:w-[80%]">
                <span>Productos:</span>
            </div>
            <div className={`mb-10 mt-4 flex justify-center gap-3 items-center w-[90%] flex-wrap `}>
                <div className={`xl:w-[15%] lg:w-[20%] md:w-[35%] sm:w-[40%] w-[45%] p-2 text-center  rounded-xl border
                 border-gray-400 cursor-pointer ${searchParams.get("categoria") == "todos" ? "bg-transparent shadow-sm shadow-black" : searchParams.get("categoria") == undefined ? "bg-transparent shadow-sm shadow-black" : "bg-white"}`} onClick={() => { searchParamsCategory("todos") }}>
                    <span>Todos</span>
                </div>

                {categories.map((c, i) =>
                    <div key={i} className={`xl:w-[15%] lg:w-[20%] md:w-[35%] sm:w-[40%] w-[45%] flex-wrap-reverse  p-2 text-center
                          rounded-xl border  cursor-pointer 
                          ${searchParams.get("categoria") == c ? "bg-transparent text-black border shadow-sm shadow-black" : "bg-white text-black border-gray-400"} `}
                        onClick={() => {
                            searchParamsCategory(c)
                        }}>
                        <span>{c}</span>
                    </div>
                )}

            </div>

            <div className=" flex sm:justify-center gap-0 md:gap-15 flex-wrap md:w-[80%] w-[95%] gap-y-4">
                {filteredProducts.map((p, i) =>

                    <div className={` 
                         w-[50%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] md:h-auto h-96 justify-between  relative hover:shadow-lg  hover:shadow-black 
                         flex flex-col   shrink-0 hover:bg-white bg-blanco   active:scale-95 active:bg-white active:border-gray-400
                           transition-all duration-200  overflow-hidden gap-0 md:gap-4 p-4 border border-gray-200`}
                        key={i}>
                        <div className="text-center py-2  xl:text-xl lg:text-lg md:text-md">
                            <span>{p.nombre}</span>
                        </div>
                        <div className=" overflow-hidden object-cover object-[center_10%] justify-center flex w-full">
                            <img src={p.img} alt="" className="sm:w-50 sm:h-50 w-30 h-30 rounded-2xl" />
                        </div>
                        <div className="sm:text-lg text-sm">
                            <span>stock:</span>

                            <span className={p.stock == "disponible" ? "text-green-600" : "text-rojo"}> {p.stock}</span>
                        </div>
                        <div>

                            <span className="text-sm sm:text-lg">Precio x {p.venta}:  </span>
                        </div>
                        <div className="text-sm flex-wrap sm:flex-row flex-col wrap-break-word md:gap-0 gap-2 flex  sm:items-center">
                            <span className="p-2 bg-blue-500 sm:text-md text-lg text-white rounded-2xl sm:w-auto w-[30%] min-w-24 text-center"> ${p.precio}</span>
                        </div>
                        <div className="w-full flex justify-center p-2 border-2 active:bg-white" onClick={() => contactProduct("karina", true, p.nombre)}>
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
    )
}