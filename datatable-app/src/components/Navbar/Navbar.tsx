import './Navbar.css'
import { Header } from '@elvia/elvis-header/react';
// import { HeaderProps } from '@elvia/elvis-header/react';
import { addIcons, Icon } from "@elvia/elvis-icons/react";
import { dashboard, dashboardColor, fullBattery, fullBatteryColor, search, searchColor } from "@elvia/elvis-assets-icons";

addIcons({
    dashboard: { svg: dashboard.getIcon() },
    dashboardColor: { svg: dashboardColor.getIcon() },
    search: { svg: search.getIcon() },
    searchColor: { svg: searchColor.getIcon() },
    fullBattery: { svg: fullBattery.getIcon() },
    fullBatteryColor: { svg: fullBatteryColor.getIcon() }
});


export default function Navbar() {
    return (
        <header className="navbar">
            <Header
                username={"Ola Nordmann"}
                email={"ola.nordmann@elvia.no"}
                appTitle={"Designsystemet"}
                pageTitle={"Dashbord"}
                navItems={
                    <div className="e-sidenav__container">
                    <a
                        aria-label="Dashbord"
                        className="e-sidenav__item e-sidenav__item--active"
                    >
                        <div className="e-sidenav__icon-container">
                            <Icon name="dashboard" size="sm"></Icon>
                            <Icon name="dashboardColor" size="sm"></Icon>
                        </div>
                        <div className="e-sidenav__item-text">Dashbord</div>
                    </a>
                    <a aria-label="Søk" className="e-sidenav__item">
                        <div className="e-sidenav__icon-container">
                            <Icon name="search" size="sm"></Icon>
                            <Icon name="searchColor" size="sm"></Icon>
                        </div>
                        <div className="e-sidenav__item-text">Søk</div>
                    </a>
                    <a aria-label="Analyse" className="e-sidenav__item">
                        <div className="e-sidenav__icon-container">
                            <Icon name="fullBattery" size="sm"></Icon>
                            <Icon name="fullBatteryColor" size="sm"></Icon>
                        </div>
                        <div className="e-sidenav__item-text">Analyse</div>
                    </a>
                    </div>
                }
            ></Header>
        </header>
    )
}