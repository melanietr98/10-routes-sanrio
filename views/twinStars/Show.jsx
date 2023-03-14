import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.twinStars.name}</strong> is {props.twinStars.size}</p>
            <p>Its color is <span style={{ color: props.twinStars.color }}>{props.twinStars.color}</span></p>

            <br />

            <a href="/twinStars">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override