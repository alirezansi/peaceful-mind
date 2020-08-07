import React, { Component } from 'react'
import { Redirect , Link } from 'react-router-dom'
import Navbar from './Navbar'


let baseURL = 'http://localhost:8000/api/v1/yogas/';



export default class EachYoga extends Component {
    state = {
        yoga: {},
        poses:[],
        newPose:{
            name:'',
            description:'',
            benefits : '',
            video : '',
        }
    }



    componentDidMount() {
        this.findPoses()
    }

    findPoses= (yogaId) => {
        fetch(baseURL + yogaId ).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
            yoga : data.data,
            poses : data.data.poses
            });
        });
    }







    render() {
        return (
            <div>
                <h2>each yoga</h2>
            
                <div>
                    <Navbar />
                </div>
                <div>
                    {
                        this.state.poses.map(pose =>{
                            return(
                                <div key={pose.id}>
                                    <h3>{pose.name}</h3>
                                    <p>{pose.description}</p>
                                    <p>{pose.benefits}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div>

                </div>




            </div>
        )
    }
}
