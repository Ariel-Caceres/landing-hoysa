export const Banner = () => {
    return (
        <div className="w-full  justify-center  text-white text-sm flex pt-5 ">
            <div className=" items-center flex justify-between w-[95%] bg-marron-oscuro p-2 rounded-2xl">
                <span className=" gap-2 items-center md:flex hidden w-[20%]"><i className="fa-solid fa-truck-arrow-right "></i>Envíos gratis</span>
                <div className="flex justify-center xl:w-[60%] w-full">
                    <span className="text-md text-center xl:text-xl">Envíos gratis por la zona barrio La Escondida</span>
                </div>
                <span className=" gap-2 items-center md:flex hidden  w-[20%]"><i className="fa-solid fa-truck-arrow-right"></i>Envíos Gratis</span>
            </div>
        </div>
    )
}