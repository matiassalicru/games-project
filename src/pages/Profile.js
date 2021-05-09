import React from 'react'
import profile from '../Assets/profile.png'

export const Profile = () => {
    console.log('Im here');
    return (
        <div className='profile__main'>
            <header className='profile__header'>
                <div className='profile__description_cover'>
                    <img className='profile__cover' src={profile} alt="profile" />
                    <h1 className='profile__name'>Matías Salicrú</h1>
                </div>
                <ul className='profile__list'>
                    <li className='profile__list_item'>
                        <button className='btn'>
                            Games played
                        </button>
                    </li>
                    <li className='profile__list_item'>
                        <button className='btn'>
                            Games to play
                        </button>
                    </li>
                    <li className='profile__list_item'>
                        <button className='btn'>
                            Games to buy
                        </button>
                    </li>
                </ul>
            </header>
        </div>
    )
}
