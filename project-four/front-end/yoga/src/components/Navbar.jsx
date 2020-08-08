import React from 'react'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
    return (
        <div className='navbar'>
            <div>
                <h2 className='peaceful' >Peaceful Mind</h2>
            </div>
            <div>
                <Link className='nav-link' to={`/yogas`} >YOGA</Link>
                <Link className='nav-link' to={`/about`} >ABOUT</Link>
            </div>
            
        </div>
    )
}