import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.keroppi.name}</strong> is {props.keroppi.size}</p>
            <p>Its color is <span style={{ color: props.keroppi.color }}>{props.keroppi.color}</span></p>

            <br />

            <a href="/keroppi">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override