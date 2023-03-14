import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.pochacco.name}</strong> is {props.pochacco.size}</p>
            <p>Its color is <span style={{ color: props.pochacco.color }}>{props.pochacco.color}</span></p>

            <br />

            <a href="/pochacco">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override