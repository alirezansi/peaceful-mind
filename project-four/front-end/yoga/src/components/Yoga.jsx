import React, { Component } from 'react'
// import NewYogaForm from './NewYogaForm.jsx'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Navbar from './Navbar.jsx'





let baseURL = 'http://localhost:8000/api/v1/yogas/';


export default class Yoga extends Component {
    state={
        yogas:[],
        newYoga:{
            name: '',
            img:''
        }
    }


    componentDidMount() {
        this.findYogas()
    }

    findYogas= () => {
        fetch(baseURL ).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
            yogas : data.data
            });
        });
    }


render(){
    return(
        <div>
            <div>
                {this.state.yogas.map(yoga=>{
                    return(
                        <div key={yoga.id} >
                            <h2><Link to={`/yogas/${yoga.id}/`}>{yoga.name}</Link></h2>
                            <img src={yoga.img} alt='' />
                        </div>
                    )
                })}
            </div>


        </div>
    )
    }
}


