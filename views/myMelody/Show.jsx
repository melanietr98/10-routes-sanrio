import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.myMelody.name}</strong> is {props.myMelody.size}</p>
            <p>Its color is <span style={{ color: props.myMelody.color }}>{props.myMelody.color}</span></p>

            <br />

            <a href="/myMelody">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override