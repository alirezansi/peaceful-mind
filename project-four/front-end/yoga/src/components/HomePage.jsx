import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <div className='loadPage'>
                    <Link to={'/yogas'} ><img className='loadLogo' src='https://themustardseedproject.org/wp-content/uploads/2018/06/Yoga-Logo-Element-Template-Graphic-999x999.png' alt='' /></Link>
                </div>
            </div>
        )
    }
}
