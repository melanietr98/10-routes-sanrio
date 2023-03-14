import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p> <strong>{props.cinnamoroll.name}</strong> is {props.cinnamoroll.size}</p>
            <p>Its color is <span style={{ color: props.cinnamoroll.color }}>{props.cinnamoroll.color}</span></p>

            <br />

            <a href="/cinnamoroll">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override
