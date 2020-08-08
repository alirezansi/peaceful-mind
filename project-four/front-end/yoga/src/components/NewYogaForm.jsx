import React from 'react'

export default function NewYogaForm(props) {
    return (
        <div>
            <form onSubmit={props.addYoga}>
                    <input type='text' id='name' value={props.newYoga.name} onChange={props.handleChange} />
                    <input type='text' id='img' value={props.newYoga.img} onChange={props.handleChange} />
                    <input type='submit' ></input>
                </form>
        </div>
    )
}
