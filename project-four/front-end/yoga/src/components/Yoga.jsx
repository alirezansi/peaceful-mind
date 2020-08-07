import React, { Component } from 'react'
import NewYogaForm from './NewYogaForm.jsx'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.jsx'





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

    addYoga = (event) =>  {
        event.preventDefault();
        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                newYoga:{
                    name: this.state.name,
                    img: this.state.img
                }
                
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            }).then( (res => {
            return res.json();
            })).then(response => {
                console.log(response.data)
                const newYoga = response.data
                const copyYogas = [...this.state.yogas];
                copyYogas.push(newYoga);
                this.setState({
                    yogas: copyYogas,
                    newYoga:{
                        name: '',
                        img:''
                    }
                })
        });
        this.findYogas()
    }

    handleChange =(event) =>{
        const copyNewYoga = { ...this.state.newYoga }
        copyNewYoga[event.target.id] = event.target.value

        this.setState({
            newYoga: copyNewYoga
        })
    }






render(){
    return(
        <div>
            <div>
                <Navbar />
            </div>

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
            <div>
                <NewYogaForm 
                    yoga={this.state.newYoga}
                    handleChange={this.handleChange}
                    addYoga={this.addYoga}
                /> 
            </div>
            



        </div>
    )
    }
}


