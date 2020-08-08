import React from 'react'

export default function NewPoseForm(props) {
    return (
        <div>
                <form className='form' onSubmit={props.addPose}>
                    <h3>Create New Pose</h3>
                    <input type='text' id='name' value={props.newPose.name} onChange={props.handleChangePose} placeholder='name' />
                    <input type='text' id='description' value={props.newPose.description} onChange={props.handleChangePose} placeholder='description' />
                    <input type='text' id='benefits' value={props.newPose.benefits} onChange={props.handleChangePose} placeholder='benefits'/>
                    <input type='text' id='video' value={props.newPose.video} onChange={props.handleChangePose} placeholder='video url'/>
                    <input type='submit' ></input>
                </form>
        </div>
    )
}

