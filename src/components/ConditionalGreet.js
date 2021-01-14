import React, { Component } from 'react'

class ConditionalGreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    

    render() {
        return this.state.isLoggedIn ? (<div>You are Logged In.</div>) : (<div>You are Logged Out.</div>)
        // return this.state.isLoggedIn && <div>You are Logged In</div>\
        // return(
        //     <button onClick={this.greet_Handler()}>Check Status</button>
        // )
    }
}

export default ConditionalGreet
