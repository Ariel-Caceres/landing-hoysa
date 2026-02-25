import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
export const NavBar = () => {
    const navigate = useNavigate()
    const [showNavbar, setShowNavBar] = useState<boolean>(false)
    const location = useLocation()


    return (
        <div className="w-full flex justify-center items-center md:py-2 ">
            <div className="w-[95%] flex md:justify-between items-center justify-center flex-wrap xl:w-[80%] pb-4">
                <div className="flex items-center  md:w-[80%] xl:gap-8 lg:gap-3 flex-wrap wrap-normal xl:justify-start  md:justify-start justify-between w-full ">

                    <div className="w-[40%] xl:w-[15%] lg:w-[20%] md:w-[20%] sm:w-[30%] rounded-2xl overflow-hidden  cursor-pointer" onClick={() => navigate("/")}>
                        <img src="images/logo-removebg.png" alt="" className="w-full" />
                    </div>

                    <ul className={` shadow-black fixed w-64 md:static  top-0 right-0 xl:text-3xl lg:text-md md:h-auto delay-200  lg:w-[40%]  md:w-[50%] xl:w-[35%]
                         bg-blanco h-full md:bg-transparent md:border-none border-l rounded-l-3xl  flex flex-col md:flex-row gap-6 md:gap-0 xl:gap-4 p-6 md:p-3
                          shadow-xl md:shadow-none text-[16px] md:text-[13px] xl:text-[15px] justify-start md:justify-evenly transform transition-transform duration-300 
                          ${showNavbar ? "translate-x-0" : "translate-x-[110%]"} md:translate-x-0 z-20`}>
                        <div className="w-full md:hidden flex justify-center border-b border-gray-400 ">
                            <img src="images/favicon.png" alt="" className="w-[60%] " />
                        </div>
                        <div className="absolute md:hidden top-5 right-5 text-3xl active:rotate-45 transition-all ease-in-out duration-200 active:scale-75 cursor-pointer" onClick={() => setShowNavBar(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <li className={`hover:cursor-pointer text-center hover:text-rojo w-1/5 ${location.pathname == "/" ? "text-rojo" : ""}`} onClick={() => navigate("/")}>
                            <span>Inicio</span>
                        </li>
                        <li className={`hover:cursor-pointer text-center hover:text-rojo w-1/4 ${location.pathname == "/productos" ? "text-rojo" : ""}`} onClick={() => navigate("/productos")}>
                            <span>Productos</span>
                        </li>
                        <li className={`hover:cursor-pointer text-center hover:text-rojo w-1/5 ${location.pathname == "/contacto" ? "text-rojo" : ""}`} onClick={() => navigate("/contacto")}>
                            <span>Contacto</span>
                        </li>
                        {/* <li className="hover:cursor-pointer text-center hover:text-rojo min-w-36  md:block flex ">
                            <span>Sobre Nosotros</span>
                        </li>
                        <li className="hover:cursor-pointer text-center hover:text-rojo w-1/4">
                            <span>Sabores</span>
                        </li> */}

                        <div className="block border-b border-b-gray-400">
                        </div>
                    </ul>

                    <div className="text-3xl flex md:hidden cursor-pointer    transition-all ease-in-out duration-300 " onClick={() => setShowNavBar(true)}>
                        <i className=" fa-solid fa-bars"></i>
                    </div>
                </div>
                {/* buscador */}
                <div className="hidden  items-center bg-white rounded-2xl md:justify-between md:w-[20%] w-[50%] justify-self-center">
                    <div className="w-[90%]"><input type="text" className="outline-0 w-full h-full p-2 " /></div>
                    <div className="w-[10%] flex justify-center text-md px-4">
                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}