import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

export default () => {
    return(
        <div id='header-landing'>
            <Link to='/'>Filmaria</Link>
        </div>
    )
}