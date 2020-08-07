import React, { Component } from 'react'

export default class NewYogaForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addYoga}>
                    <input type='text' id='name' value={this.props.yoga.name} onChange={this.props.handleChange} />
                    <input type='text' id='img' value={this.props.yoga.img} onChange={this.props.handleChange} />
                    <input type='submit' ></input>
                </form>
            </div>
        )
    }
}