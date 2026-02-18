import { Banner } from "../components/Banner"
import { MainProduct } from "../components/MainProduct"
import { NavBar } from "../components/NavBar"
import { ProductsCarrousel } from "../components/ProductsCarrousel"

export const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <Banner />
            <NavBar />
            <MainProduct />
            <ProductsCarrousel />

        </div>
    )
}