import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.tuxedoSam.name}</strong> is {props.tuxedoSam.size}</p>
            <p>Its color is <span style={{ color: props.tuxedoSam.color }}>{props.tuxedoSam.color}</span></p>

            <br />

            <a href="/tuxedoSam">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override