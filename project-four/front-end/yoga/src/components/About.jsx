import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h1>About</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil sunt perspiciatis nesciunt illum nobis incidunt, molestiae nulla voluptas dolores ratione accusantium id, quasi et alias optio sequi odio assumenda?</p>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
