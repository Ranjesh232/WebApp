import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler("Ranjesh")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
