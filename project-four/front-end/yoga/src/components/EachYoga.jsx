import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import NewPoseForm from './NewPoseForm'
import Footer from './Footer.jsx'

let baseURL = 'http://localhost:8000/api/v1/yogas/';
let baseURLPose = 'http://localhost:8000/api/v1/poses/';

//learned this.props.match.params from https://stackoverflow.com/questions/54114416/how-to-access-this-props-match-params-along-with-other-props
export default class EachYoga extends Component {
    state = {
        yoga: {},
        poses:[],
        newPose:{
            name:'',
            description:'',
            benefits : '',
            video : '',
            yoga:this.props.match.params.id
        },
        showForm:false
    }


    showForm = (event) =>{
        this.setState({
            showForm : !this.state.showForm 
        })
    }


    componentDidMount() {
        const yogaId = this.props.match.params.id
        this.findPoses(yogaId)
    }

    findPoses= (yogaId) => {
        fetch(baseURL + yogaId ).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
            yoga : data.data,
            });
        });
        fetch(baseURLPose).then(res => {
            return res.json();
        }).then(data => {
            let myPoses= data.data 
            let myPoseArr = []
            for(let i=0 ; i < myPoses.length ; i++ ){
                let myYogaId = parseInt (yogaId , 10)
                if( myYogaId === myPoses[i].yoga.id){
                    myPoseArr.push(myPoses[i])
                }   
                this.setState({
                    poses: myPoseArr
                })
            }
        });
    }







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
                }
            })
        }
        catch (err) {
            console.log(`oh no error :( `, err)
        }
    this.findPoses()
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
                <div>
                    <h1 className='headerEachYoga'>{this.state.yoga.name}</h1>
                </div>
                <div className='poses'>
                    {
                        this.state.poses.map(pose =>{
                            return(
                                <div className='eachPose' key={pose.id}>
                                    <div className='videos'>
                                    <iframe width="300" height="200" src={pose.video} ></iframe>
                                    <div>
                                        <img className='trash' alt='' src='https://static.thenounproject.com/png/147529-200.png'></img>
                                        <img className='trash' alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png'></img>
                                    </div>
                                    </div>
                                    <div className='descriptions'>
                                        <h2>{pose.name}</h2>
                                        <h4>Benefits: {pose.benefits}</h4>
                                        <p>Description: {pose.description}</p>
                                        
                                    </div>
                                    
                                    
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
                    <Footer />
                </div>
            </div>
        )
    }
}
