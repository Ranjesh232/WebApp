import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler(){
        console.log('Subscribed')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click to Subscribe</button>
            </div>
        )
    }
}

export default ClassClick
