import React, { Component } from 'react'
import './ResultStyle.css'

class Result extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             age: '',
             wages: '',
             number: ''
        }
    }
    
    handleName= (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAge= (event) => {
        this.setState({
            age: event.target.value
        }) 
    }

    handleWages= (event) => {
        this.setState({
            wages: event.target.value
        })
    }

    handleNumber= (event) => {
        this.setState({
            number: event.target.value
        })
    }

    clickHandler =(event) => {
        const count= event.current.value
        alert(count)
    }

    

    render() {
        return (
            <form>
                <label>Name: </label>
                <input type='text' placeholder='Your name' value={this.state.name} onChange={this.handleName} required/><br />
                <label>Age: </label>
                <input type='number' placeholder='Your age' value={this.state.age} onChange={this.handleAge} required/><br />
                <label>Wages: </label>
                <input type='number' placeholder='Your wages' value={this.state.wages} onChange={this.handleWages} required/><br />
                <label>Number: </label>
                <input type='number' placeholder='' value={this.state.number} onChange={this.handleNumber} />
                <button onClick={this.clickHandler}>+</button><br /><br />
                <button className='myButton' type='submit'>Submit</button>
                <button className='myButton' type='reset'>Reset</button><br />
            </form>
        )
    }
}

export default Result
