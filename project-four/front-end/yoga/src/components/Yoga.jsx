import React, { Component } from 'react'
import NewYogaForm from './NewYogaForm.jsx'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import axios from 'axios'




let baseURL = 'http://localhost:8000/api/v1/yogas/'


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


    // findYogas = async () => {
    //     try {
    //         const response = await axios.get(baseURL)
    //         const parsedResponse = response.data;
    //         console.log( 'this is the parsedResponse')
    //         console.log(parsedResponse)
    //         this.setState({ 
    //             yogas: parsedResponse
    //         })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    findYogas = () => {
        fetch(baseURL ).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
            yogas : data.data
            });
        });
    }


    addYoga = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(baseURL , this.state.newYoga)

            const copyYogas = [...this.state.yogas]
            copyYogas.push(response.data)
            this.setState({
                workouts: copyYogas,
                newYoga: {
                    name: '',
                    img:''
                }
            })
        }
        catch (err) {
            console.log(`oh nooooo fucking error`, err)
        }
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
                    newYoga={this.state.newYoga}
                    handleChange={this.handleChange}
                    addYoga={this.addYoga}
                /> 
            </div>
            



        </div>
    )
    }
}


