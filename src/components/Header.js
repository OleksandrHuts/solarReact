import { useEffect, useState } from 'react';

import logo from '../assets/img/logo.svg';

export default function SiteHeader() {
    const [navList, setNavList] = useState([]);
    const [socialList, setSocialList] = useState([]);

    const getNavList = () => {
        fetch('./data/navigation_ua.json')
            .then(res => res.json())
            .then(resp => {
                setNavList(resp)
            })
    }

    const getSocialList = () => {
        fetch('./data/social.json')
            .then(res => res.json())
            .then(resp => {
                setSocialList(resp)
            })
    }

    useEffect(()=> {
        getNavList();
        getSocialList();
    }, []);

    const socialListRender = socialList.map((item, index) => <a href={item.url} key={index}> <img src={item.icon} alt="" /></a>)

    const navListRender = navList.map((item, index) => <li key={index}> <a href={item.url}>{item.title}</a></li>)

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