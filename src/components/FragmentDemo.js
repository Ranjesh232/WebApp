import React from 'react'

function FragmentDemo() {

    const items=['A','B','C','D']

    const itemlist=items.map((item,index) => <h1 key={ index}>Hello {item}...</h1>)

    return (
        <React.Fragment >
        <div>{itemlist}</div>
        <p>This is an example of Fragments in React.</p>
        </React.Fragment>
    )
}

export default FragmentDemo
