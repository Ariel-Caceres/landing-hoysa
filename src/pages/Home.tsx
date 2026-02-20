import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { ProductsCarrousel } from "../components/ProductsCarrousel"

export const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            {/* <div className="fixed bottom-10 right-10 text-5xl z-20 ">
                <a href="https://wa.me/541171416222" target="_blank" className="" id="wsp">
                    <i className="fa-brands fa-whatsapp bg-blanco border rounded-2xl"></i>
                </a>
            </div> */}
            <Banner />
            <NavBar />
            {/* <MainProduct /> */}
            <div className=" p-4 justify-center flex border-t border-black border-b   text-2xl sm:text-3xl w-[95%] xl:w-[80%]">
                <span>Productos</span>
            </div>
            <ProductsCarrousel product="pollo" color="rojo" />
            <ProductsCarrousel product="granja" color="azul" />
            <Footer />

        </div>
    )
}