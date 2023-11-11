import { Container } from "@mui/material";
import SiteHeader from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Default(props) {
    return (
        <>
            <SiteHeader />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}