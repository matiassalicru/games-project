import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Searchbar = () => {

    return (
        <article className='searchbar__main'>
            <form>
                <label>
                    <span className='searchbar__icon'>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input required className='searchbar__input' type="search" name="search" placeholder="Need for speed..." autoComplete='off' />
                </label>
            </form>
        </article >
    )
}
