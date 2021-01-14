import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
    componentDidMount() {
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(`You are logged in as ${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler} >Log In</button>
            </div>
        )
    }
}

export default RefsDemo
