import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../assets/img/logo.svg';

export default function SiteHeader(props) {
    const [navList, setNavList] = useState([]);
    const [socialList, setSocialList] = useState([]);

    const location = useLocation();
    console.log(location);

    const icons = {
        faFacebook: {
            component: faFacebook
        },
        faYoutube: {
            component: faYoutube
        }
    }

    const getNavList = () => {
        fetch('/data/navigation_ua.json')
            .then(res => res.json())
            .then(resp => {
                setNavList(resp)
            })
    }

    const getSocialList = () => {
        fetch('/data/social.json')
            .then(res => res.json())
            .then(resp => {
                setSocialList(resp)
            })
    }

    useEffect(()=> {
        getNavList();
        getSocialList();
    }, []);

    const socialListRender = socialList.map((item, index) => <a href={item.url} key={index}> <FontAwesomeIcon icon={icons[item.iconKey].component} /></a>)

    const navListRender = navList.map((item, index) => {
        const url = item.id ? item.url+'/'+item.id : item.url;
        return <li key={index}> <NavLink to={url}>{item.title}</NavLink></li>
    })

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="flex_row page_nav">
                        <a href="/" className="logo_wrapper">
                            <img src={logo} alt="#" />
                        </a>
                        <ul className="nav_list flex_row">
                            {navListRender}
                        </ul>
                        <div className="soc_links">
                            {socialListRender}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}