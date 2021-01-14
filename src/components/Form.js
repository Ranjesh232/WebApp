import React, { Component } from 'react'
import './Style.css'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            rollno: '',
            class: 'FY'
        }
    }
    
    handleName= (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleRollno = (event) => {
        this.setState({
            rollno: event.target.value
        })
    }
    handleClass = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.rollno} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>


            
                <div className='first'><label>Name:</label>
                <input type='text' value={this.state.name} onChange={this.handleName} required/></div>




                <div className='second'><label>Rollno.:</label>
                <input type='number' value={this.state.rollno} onChange={this.handleRollno} required/></div>
                <div className='third'><label>Class:</label>
                <select onChange={this.handleClass}>
                    <option value='FY'>FY</option>
                    <option value='SY'>SY</option>
                    <option value='TY'>TY</option>
                </select></div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
