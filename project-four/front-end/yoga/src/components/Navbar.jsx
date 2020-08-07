import React from 'react'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
    return (
        <div className='navbar'>
            <Link to={`/yogas`} >YOGA</Link>
            <Link to={`/about`} >ABOUT</Link>
        </div>
    )
}