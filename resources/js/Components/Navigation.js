import React from 'react'
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Inspector from "./Inspector";

function Navigation() {

    const navlist = [
        {
            "url": "/cards",
            "title": "Картотека",
            "exact": false,
            "permission": "filing_cabinet"
        },
        {
            "url": "/",
            "title": "Запись на приём",
            "exact": true,
            "permission": "shedule"
        },
        {
            "url": "/prices",
            "title": "Прейскурант",
            "exact": false,
            "permission": "prices"
        },
        {
            "url": "/cashbox",
            "title": "Касса",
            "exact": false,
            "permission": "prices"
        },
        {
            "url": "/reports/marketing/patient",
            "title": "Отчеты",
            "exact": false,
            "permission": "materials"
        },
        {
            "url": "/crm/history",
            "title": "CRM",
            "exact": false,
            "permission": "materials"
        },
        {
            "url": "/materials/add/moving",
            "title": "Материалы",
            "exact": false,
            "permission": "materials"
        },
        {
            "url": "/personnel",
            "title": "Сотрудники",
            "exact": false,
            "permission": "employes"
        },
    ]
    return (
            <nav className="dental_navbar">
                <div className="dental_navbar_item">
                    <div className="">
                        <NavLink
                            className="logo"
                            to={"/"}>
                            <img src="../../media/logo.png" alt="Детская стоматология &quot;Семейные традиции&quot;"/>
                        </NavLink>
                    </div>
                    <div className="container_navbar">
                        <ul>
                            {(navlist).map((link, key) => {
                                return(
                                    <Inspector permission={link.permission} key={key}>
                                        <li key={key}>
                                            <NavLink
                                                to={link.url}
                                                activeClassName="active"
                                                exact={link.exact}>
                                                {link.title}
                                            </NavLink>
                                        </li>
                                    </Inspector>
                                )
                            })}
                            <Inspector permission={"materials"}>
                                <li>
                                    <NavLink
                                        to={"/settings"}
                                        activeClassName="active"
                                        exact={false}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M18.9025 7.82833L17.3358 7.62917C17.2067 7.23167 17.0475 6.84833 16.8617 6.48417L17.8292 5.23833C18.2208 4.73417 18.175 4.0225 17.7275 3.58917L16.415 2.27667C15.9775 1.825 15.2658 1.78 14.7608 2.17083L13.5167 3.13833C13.1525 2.9525 12.7692 2.79333 12.3708 2.66417L12.1717 1.1C12.0967 0.4725 11.5642 0 10.9333 0H9.06667C8.43583 0 7.90333 0.4725 7.82833 1.0975L7.62917 2.66417C7.23083 2.79333 6.8475 2.95167 6.48333 3.13833L5.23833 2.17083C4.735 1.78 4.02333 1.825 3.58917 2.2725L2.27667 3.58417C1.825 4.0225 1.77917 4.73417 2.17083 5.23917L3.13833 6.48417C2.95167 6.84833 2.79333 7.23167 2.66417 7.62917L1.1 7.82833C0.4725 7.90333 0 8.43583 0 9.06667V10.9333C0 11.5642 0.4725 12.0967 1.0975 12.1717L2.66417 12.3708C2.79333 12.7683 2.9525 13.1517 3.13833 13.5158L2.17083 14.7617C1.77917 15.2658 1.825 15.9775 2.2725 16.4108L3.585 17.7233C4.02333 18.1742 4.73417 18.2192 5.23917 17.8283L6.48417 16.8608C6.84833 17.0475 7.23167 17.2067 7.62917 17.335L7.82833 18.8983C7.90333 19.5275 8.43583 20 9.06667 20H10.9333C11.5642 20 12.0967 19.5275 12.1717 18.9025L12.3708 17.3358C12.7683 17.2067 13.1517 17.0475 13.5158 16.8617L14.7617 17.8292C15.2658 18.2208 15.9775 18.175 16.4108 17.7275L17.7233 16.415C18.175 15.9767 18.2208 15.2658 17.8292 14.7608L16.8617 13.5158C17.0483 13.1517 17.2075 12.7683 17.3358 12.3708L18.8992 12.1717C19.5267 12.0967 19.9992 11.5642 19.9992 10.9333V9.06667C20 8.43583 19.5275 7.90333 18.9025 7.82833ZM10 14.1667C7.7025 14.1667 5.83333 12.2975 5.83333 10C5.83333 7.7025 7.7025 5.83333 10 5.83333C12.2975 5.83333 14.1667 7.7025 14.1667 10C14.1667 12.2975 12.2975 14.1667 10 14.1667Z" fill="#313541"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </NavLink>
                                </li>
                            </Inspector>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navigation
