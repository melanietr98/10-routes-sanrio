import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.kuromi.name}</strong> is {props.kuromi.size}</p>
            <p>Its color is <span style={{ color: props.kuromi.color }}>{props.kuromi.color}</span></p>

            <br />

            <a href="/goat">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override