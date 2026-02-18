export const Banner = () => {
    return (
        <div className="w-full  justify-center  text-white text-sm flex pt-5 pb-5 ">
            <div className=" items-center flex justify-between sm:w-[95%]  w-[95%] bg-marron-oscuro p-2 rounded-2xl text-[12px]">
                <div className="gap-2 items-center md:flex hidden justify-center w-[25%]">
                    <i className="fa-solid fa-truck-arrow-right"></i>
                    <span className=" ">Envíos Gratis</span>
                </div>
                <div className="flex justify-center xl:w-[60%] w-full">
                    <span className="text-md text-center xl:text-xl">Envíos gratis por la zona barrio La Escondida</span>
                </div>
                <div className="gap-2 items-center md:flex hidden justify-center w-[25%]">
                    <i className="fa-solid fa-truck-arrow-right"></i>
                    <span className=" ">Envíos Gratis</span>
                </div>
            </div>
        </div>
    )
} 