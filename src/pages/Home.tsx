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
            <div className=" p-4 justify-center flex border-t border-black border-b lg:text-lg text-xl sm:text-3xl md:w-[80%]  w-[95%]">
                <span>Productos</span>
            </div>
            <ProductsCarrousel product="pollo" />
            <ProductsCarrousel product="granja" />
            <Footer />

        </div>
    )
}