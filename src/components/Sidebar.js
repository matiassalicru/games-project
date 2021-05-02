import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="sidebar__main">
            <ul className='sidebar__list'>
                <li className='sidebar__list-item'>
                    <a href='/'>
                        Games
                    </a>
                </li>
                <li className='sidebar__list-item'>
                    <a href='/'>
                        Profile
                    </a>
                </li>
            </ul>
        </aside>
    )
}
