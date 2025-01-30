import './Navbar.css'
import { Header } from '@elvia/elvis-header/react';
import { Link } from 'react-router-dom';
// import { HeaderProps } from '@elvia/elvis-header/react';
import { addIcons, Icon } from "@elvia/elvis-icons/react";
import { home, homeColor, graphBar, graphBarColor } from "@elvia/elvis-assets-icons";

addIcons({
    home: { svg: home.getIcon() },
    homeColor: { svg: homeColor.getIcon() },
    graphBar: { svg: graphBar.getIcon() },
    graphBarColor: { svg: graphBarColor.getIcon() }
});


export default function Navbar() {
    return (
        <Header
            username={"Ola Nordmann"}
            email={"ola.nordmann@elvia.no"}
            appTitle={"Example-App"}
            pageTitle={"Dashbord"}
            navItems={
                <div className="e-sidenav__container">
                    <Link to="/home" aria-label="Home" className="e-sidenav__item e-sidenav__item--active">
                            <div className="e-sidenav__icon-container">
                                <Icon name="home" size="sm"></Icon>
                                <Icon name="homeColor" size="sm"></Icon>
                            </div>
                            <div className="e-sidenav__item-text">Home</div>
                    </Link>

                    <Link to="/data-overview" aria-label="Data Overview" className="e-sidenav__item e-sidenav__item--active">
                            <div className="e-sidenav__icon-container">
                                <Icon name="graphBar" size="sm" />
                                <Icon name="graphBarColor" size="sm" />
                            </div>
                            <div className="e-sidenav__item-text">Data Overview</div>
                    </Link>
                </div>
            }
        ></Header>
    )
}