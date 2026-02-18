export const NavBar = () => {

    return (
        <div className="w-full flex justify-center items-center md:py-2 ">
            <div className="w-[95%] flex md:justify-between items-center justify-center flex-wrap xl:w-[80%] ">
                <div className="flex items-center  md:w-[80%] xl:gap-8 flex-wrap wrap-normal xl:justify-start  justify-between w-full ">

                    <div className="w-[30%] xl:w-[15%]  rounded-2xl overflow-hidden  ">
                        <img src="images/logo-removebg.png" alt="" className="w-full" />
                    </div>

                    <ul className="xl:text-[15px] md:text-[13px] xl:w-[45%]  md:w-[70%]  hidden md:flex justify-evenly p-3 text-[12px] xl:text-md w-full  xl:gap-4">
                        <li className="hover:cursor-pointer text-center hover:text-rojo w-1/5 ">
                            <a href="https://wa.me/541171416222" target="_blank" className="animate-pulse" id="wsp">
                                <span>Contacto</span>
                            </a>
                        </li>
                        <li className="hover:cursor-pointer text-center hover:text-rojo min-w-36">
                            <span>Sobre Nosotros</span>
                        </li>
                        <li className="hover:cursor-pointer text-center hover:text-rojo w-1/4">
                            <span>Sabores</span>
                        </li>
                        <li className="hover:cursor-pointer text-center hover:text-rojo w-1/4">
                            <span>Productos</span>
                        </li>
                    </ul>
                </div>

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