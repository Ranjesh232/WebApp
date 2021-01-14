import React from 'react'
 
function Eg(props) {
    console.log(props);
    return(
        <div>
            <h1>This is an example of Jsx{props.name}.</h1>
        </div>
    )
    
}

export default Eg 