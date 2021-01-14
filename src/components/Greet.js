import React from 'react'

// function  Greet() {
//     return <h1>Hello guys!!! I'm Ranjesh</h1>
// }

// ES6 code
const Greet = (props) =>{ 
    console.log(props);
    return (
        <div>
            <h1>Hello guys!!! I'm {props.name}...</h1>
            {props.children}
        </div>
    )
}
export default Greet