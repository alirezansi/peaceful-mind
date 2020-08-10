
import {Link} from 'react-router-dom'

import React, { Component } from 'react';

export default class componentName extends Component {

  render() {
    return (
        <div className='navbar'>
        <div className='logoDiv'>
            <h2 className='peaceful' >Peaceful Mind</h2>
            <img className='logoImg' alt='' src='https://themustardseedproject.org/wp-content/uploads/2018/06/Yoga-Logo-Element-Template-Graphic-999x999.png' />
        </div>
        <div>
            <Link className='nav-link' to={`/yogas`} >YOGA</Link>
            <Link className='nav-link' to={`/about`} >ABOUT</Link>
        </div>
        
    </div>
    );
  }
}
