import React from 'react'
import ListRender from './ListRender'
function List() {

    const person = [
        {
            id: 1,
            name: 'Ranjesh',
            age: 20
        },
        {
            id: 2,
            name: 'Ary',
            age: 21
        }
    ]
    const personList = person.map(person => <ListRender  key = {person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default List
                                             