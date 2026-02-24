import { Banner } from "../components/Banner"
import { NavBar } from "../components/NavBar"

export const Contact = () => {



    return (
        <div className="w-auto flex justify-center flex-col items-center">
            <Banner />
            <NavBar />
            <div className=" flex justify-center  w-full">
                <span className="sm:text-3xl text-2xl">Contactanos</span >
            </div>
            <div className=" flex justify-center w-full sm:text-2xl text-md text-center mt-4 ">
                <p>Estamos disponibles para tomar tu pedido </p>
            </div>
            <div className=" mt-10 flex justify-center   w-[90%] flex-wrap md:gap-2 gap-5">
                <div className="flex justify-center w-full  sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] ">
                    <div className="  w-full  bg-white rounded-2xl px-4 shadow-md p-6 text-center space-y-3 ">
                        <h2 className="text-2xl font-light">Consultas</h2>

                        <div className="text-4xl">👩</div>

                        <p className="text-lg font-extralight">Maria</p>

                        <p className="text-gray-600"> 11-6136-5411</p>

                        <a
                            href="https://wa.me/541161365411"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" mt-4 inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-light py-3 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 " >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Escribir por WhatsApp
                        </a>
                    </div>
                </div>
                <div className="flex justify-center w-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
                    <div className="  w-full bg-white rounded-2xl px-4  shadow-md p-6 text-center space-y-3 ">
                        <h2 className="text-2xl font-light">Pedidos</h2>

                        <div className="text-4xl">👩</div>

                        <p className="text-lg font-extralight">Karina</p>

                        <p className="text-gray-600">11-7141-6222</p>

                        <a
                            href="https://wa.me/541171416222"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" mt-4 inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-light py-3 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 " >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            Escribir por WhatsApp
                        </a>
                    </div>
                </div>
            </div>


            <div className="xl:w-[55%] lg:w-[70%] md:w-[80%] sm:w-[80%] mt-10  bg-white rounded-2xl shadow-md p-6 text-center space-y-3">
                <h3 className="font-light text-xl mb-3">
                    Dónde podes encontrarnos
                </h3>

                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3287.936307178655!2d-58.86341962426403!3d-34.50449897298997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzE2LjIiUyA1OMKwNTEnMzkuMCJX!5e0!3m2!1ses!2sar!4v1771557492502!5m2!1ses!2sar"
                        className="w-full h-52"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>

    )
}