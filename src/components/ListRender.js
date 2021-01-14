import React from 'react'

function ListRender({person}) {
    return (
        <div>
            <div>{person.name} is {person.age} years old.</div>
        </div>
    )
}

export default ListRender
