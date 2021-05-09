import React, { useState } from 'react'
import {
    faAddressCard,
    faGamepad,
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = () => {
    const [isSidebarExtended, setIsSidebarExtended] = useState(false)

    const extendSidebar = () => {
        setTimeout(() => {
            setIsSidebarExtended(true);
        }, 100);
    };

    const shrinkSidebar = () => {
        setTimeout(() => {
            setIsSidebarExtended(false);
        }, 100);
    };

    return (
        <aside
            className="sidebar__main"
            onMouseOver={extendSidebar}
            onMouseLeave={shrinkSidebar}
        >
            {
                !isSidebarExtended ? (

                    <ul className="sidebar__list">
                        <li className="sidebar__list-item">
                            <FontAwesomeIcon icon={faGamepad} />
                        </li>
                        <li className="sidebar__list-item">
                            <FontAwesomeIcon icon={faAddressCard} />
                        </li>
                        <li className="sidebar__list-item">
                            <FontAwesomeIcon icon={faQuestionCircle} />
                        </li>
                    </ul>
                ) : (
                    <ul className="sidebar__text-list ">
                        <li className="sidebar__text-list-item">
                            <a href="/1">Games</a>
                        </li>
                        <li className="sidebar__text-list-item">
                            <a href="/profile">Profile</a>
                        </li>
                        <li className="sidebar__text-list-item">
                            <a href="/help">Help</a>
                        </li>
                    </ul>
                )
            }
        </aside>
    )
}
