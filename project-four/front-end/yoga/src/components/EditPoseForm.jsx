import React, { Component } from 'react';



let baseURLPose = 'http://localhost:8000/api/v1/poses/';

export default class componentName extends Component {
    state={
        id:this.props.CurrentPoseBeingEdited.id,
        name:this.props.CurrentPoseBeingEdited.name,
        benefits:this.props.CurrentPoseBeingEdited.benefits,
        description:this.props.CurrentPoseBeingEdited.description,
        video:this.props.CurrentPoseBeingEdited.video,
    }

    componentDidMount(){
        this.setState({
            id:this.props.CurrentPoseBeingEdited.id,
            name:this.props.CurrentPoseBeingEdited.name,
            benefits:this.props.CurrentPoseBeingEdited.benefits,
            description:this.props.CurrentPoseBeingEdited.description,
            video:this.props.CurrentPoseBeingEdited.video
        })
    }
    
    
        handleEditChange = (event) =>{
            this.setState({
                [event.target.id]: event.target.value,
            });
        }
    
        updatePose = (event , id ) => {
            event.preventDefault()
            fetch(baseURLPose + id, {
                method: 'PUT',
                body: JSON.stringify({
                    name: this.state.name,
                    benefits: this.state.benefits,
                    description: this.state.description,
                    video:this.state.video
                }),
                headers: {
                'Content-Type': 'application/json',
                }, 
            }).then( (res => {
                return res.json();
                })).then(response => {
                    console.log(response.data)
                    this.setState({
                        name: this.state.name,
                    benefits: this.state.benefits,
                    description: this.state.description,
                    video:this.state.video
                    })
            });
            
        }




    render() {
    return (
        <>
        <div className='close'>
            <img src='https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png' className='trash' onClick={(event)=> this.props.closeForm(event)} ></img>
        </div> 
        <div className='EditPoseForm'>
            <form onSubmit={ (event , id) => this.updatePose(event , this.state.id ) }>
                <h2>Edit the pose information</h2>
                <input type='text' value={this.state.name} id='name' onChange={this.handleEditChange} ></input><br></br>
                <input type='text'  value={this.state.benefits} id='benefits'  onChange={this.handleEditChange}></input><br></br>
                <input type='text' value={this.state.description} id='description' onChange={this.handleEditChange} ></input><br></br>
                <input type='text'  value={this.state.video}  id='video' onChange={this.handleEditChange} ></input><br></br>
                <input type='submit' ></input>
            </form>
        </div>
        </>
    );
  }
}
