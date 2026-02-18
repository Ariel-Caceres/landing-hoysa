import { Banner } from "../components/Banner"
import { MainProduct } from "../components/MainProduct"
import { NavBar } from "../components/NavBar"

export const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <Banner />
            <NavBar />
            <MainProduct />

        </div>
    )
}