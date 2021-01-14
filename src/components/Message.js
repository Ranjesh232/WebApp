// This is an example of state class component...

import React , {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Hello User! Click to Subscribe'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for Subscribing!!!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = { () => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message