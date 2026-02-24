import { Banner } from "../components/Banner"
import { NavBar } from "../components/NavBar"

export const Contact = () => {



    return (
        <div className="w-auto">
            <Banner />
            <NavBar />
            <div className="bg-red-200 flex justify-center  ">
                <span className="text-2xl">Contactanos</span >
            </div>
        </div>
    )
}