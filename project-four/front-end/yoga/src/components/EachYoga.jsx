import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import NewPoseForm from './NewPoseForm'

let baseURL = 'http://localhost:8000/api/v1/yogas/';
let baseURLPose = 'http://localhost:8000/api/v1/poses/';


export default class EachYoga extends Component {
    state = {
        yoga: {},
        poses:[],
        newPose:{
            name:'',
            description:'',
            benefits : '',
            video : '',
        },
        showForm:false
    }


    showForm = (event) =>{
        this.setState({
            showForm : !this.state.showForm 
        })
    }


    // componentDidMount() {
    //     const yogaId = this.props.match.params.id
    //     this.findPoses(yogaId)
    // }

    // findPoses= (yogaId) => {
    //     fetch(baseURL + yogaId ).then(res => {
    //         return res.json();
    //     }).then(data => {
    //         this.setState({
    //         yoga : data.data,
    //         poses : data.data.poses
    //         });
    //     });
    // }

    addPose = async (event) => {
        event.preventDefault()
        console.log(this.state.newPose)
        try {
            const response = await axios.post(baseURLPose, this.state.newPose)

            const copyPoses = [...this.state.poses]
            copyPoses.push(response.data)
            this.setState({
                poses: copyPoses,
                newPose: {
                    name: '',
                    description: '',
                    benefits: '',
                    video:'',
                    yoga: ''
                }
            })
        }
        catch (err) {
            console.log(`oh no error again`, err)
        }
    }

    handleChangePose = (event) => {
        const copyNewPose = { ...this.state.newPose }
        copyNewPose[event.target.id] = event.target.value

        this.setState({
            newPose: copyNewPose
        })
    }





    render() {
        return (
            <div>
                
            
                <div>
                    <Navbar />
                </div>
                <h1>each yoga with poses</h1>
                <div className='empty'>

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
                <div className='plusShow'>
                <button onClick={(event)=> this.showForm(event)}>+</button>
                </div>
                {this.state.showForm ?  
                <div className='newPose'>
                <NewPoseForm 
                newPose={this.state.newPose}
                handleChangePose={this.handleChangePose}
                addPose={this.addPose}
                yogaId={this.props.match.params.id}
                />
                </div>
                : ''}
                <div>
                    <h1>footer</h1>
                </div>
            </div>
        )
    }
}
