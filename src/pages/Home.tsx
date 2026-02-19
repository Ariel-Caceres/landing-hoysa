import { Banner } from "../components/Banner"
import { MainProduct } from "../components/MainProduct"
import { NavBar } from "../components/NavBar"
import { ProductsCarrousel } from "../components/ProductsCarrousel"

export const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="fixed bottom-10 right-10 text-5xl z-20 ">
                <a href="https://wa.me/541171416222" target="_blank" className="" id="wsp">
                    <i className="fa-brands fa-whatsapp bg-blanco border rounded-2xl"></i>
                </a>
            </div>
            <Banner />
            <NavBar />
            <MainProduct />
            <ProductsCarrousel />

        </div>
    )
}