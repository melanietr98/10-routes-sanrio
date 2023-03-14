import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p> <strong>{props.sanrioDanshi.name}</strong> is {props.sanrioDanshi.size}</p>
            <p>Its color is <span style={{ color: props.sanrioDanshi.color }}>{props.sanrioDanshi.color}</span></p>

            <br />

            <a href="/sanrioDanshi">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override
