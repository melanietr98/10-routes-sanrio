import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.pompompurin.name}</strong> is {props.pompompurin.size}</p>
            <p>Its color is <span style={{ color: props.pompompurin.color }}>{props.pompompurin.color}</span></p>

            <br />

            <a href="/pompompurin">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override