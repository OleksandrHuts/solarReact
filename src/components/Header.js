import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.jpg';
import { Container } from '@mui/material';

export default function SiteHeader(props) {
    const [navList, setNavList] = useState([]);

    // const location = useLocation();

    const getNavList = () => {
        fetch('/data/navigation_ua.json')
            .then(res => res.json())
            .then(resp => {
                setNavList(resp)
            })
    }

    useEffect(()=> {
        getNavList();
    }, []);

    const navListRender = navList.map((item, index) => {
        const url = item.id ? item.url+'/'+item.id : item.url;
        return <li key={index}> <NavLink to={url}>{item.title}</NavLink></li>
    })

    return (
        <header className="header">
            <Container>
                <nav className="nav">
                    <div className="flex_row page_nav">
                        <a href="/" className="logo_wrapper">
                            <img src={logo} alt="#" />
                        </a>
                        <ul className="nav_list flex_row">
                            {navListRender}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    )
}