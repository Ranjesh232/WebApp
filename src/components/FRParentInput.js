import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

    clickHandler1 = () => {
        alert(`You are logged in as ${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} required/>
                <button onClick={this.clickHandler}>focus Input</button>
                <button onClick={this.clickHandler1}>Log In</button>
            </div>
        )
    }
}

export default FRParentInput
