export const NavBar = () => {

    return (
        <div className="w-full flex justify-center items-center ">
            <div className="w-[95%] flex md:justify-between items-center justify-center flex-wrap md:w-[80%] ">
                <div className="flex items-center  md:w-[80%] xl:gap-8 flex-wrap wrap-normal xl:justify-start justify-between w-full">

                    <div className="w-[30%] xl:w-[15%]  rounded-2xl overflow-hidden   ">
                        <img src="./public/logo-removebg.png" alt="" className="w-full" />
                    </div>

                    <ul className="w-[65%] xl:w-[45%] md:w-[70%] flex justify-evenly xl:text-md text-sm md:w-[] gap-4">
                        <li className="hover:cursor-pointer hover:text-rojo">
                            <span>Contacto</span>
                        </li>
                        <li className="hover:cursor-pointer hover:text-rojo">
                            <span>Sobre Nosotros</span>
                        </li>
                        <li className="hover:cursor-pointer hover:text-rojo">
                            <span>Sabores</span>
                        </li>
                        <li className="hover:cursor-pointer hover:text-rojo">
                            <span>Productos</span>
                        </li>
                    </ul>
                </div>

                <div className=" flex items-center bg-white rounded-2xl md:justify-between md:w-[20%] w-[50%] justify-self-center">
                    <div className="w-[90%]"><input type="text" className="outline-0 w-full h-full p-2 " /></div>
                    <div className="w-[10%] flex justify-center text-md px-4">
                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}