import React, { Component } from 'react'

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'] };
    }

    render() {
        return(
            <div>
               <form>
                   <div id="dynamicInput">
                       {/* {this.state.inputs.map(input => <FormInput key={input} />)} */}
                   </div>
               </form>
               <button onClick={ () => this.appendInput() }>
                   CLICK ME TO ADD AN INPUT
               </button>
            </div>
        );
    }

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }
}

export default MultipleChoice