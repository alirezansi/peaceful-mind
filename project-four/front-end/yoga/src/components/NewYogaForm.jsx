import React from 'react'

export default function NewYogaForm(props) {
    return (
        <div>
            <form className='form' onSubmit={props.addYoga}>
                    <h3>Create New Section</h3>
                    <input type='text' placeholder='Name' id='name' value={props.newYoga.name} onChange={props.handleChange} />
                    <input type='text' placeholder='Img url' id='img' value={props.newYoga.img} onChange={props.handleChange} />
                    <input type='submit' ></input>
                </form>
        </div>
    )
}
