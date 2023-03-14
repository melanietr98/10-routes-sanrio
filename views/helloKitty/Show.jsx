import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p> <strong>{props.helloKitty.name}</strong> is {props.helloKitty.size}</p>
            <p>Its color is <span style={{ color: props.helloKitty.color }}>{props.helloKitty.color}</span></p>

            <br />

            <a href="/helloKitty">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override
