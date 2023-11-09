import Footer from "../components/Footer";
import SiteHeader from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Default(props) {
    return (
        <>
            <SiteHeader />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}