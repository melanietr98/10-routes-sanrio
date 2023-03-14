import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.twinStars.map((twinStars, index) => 
                    <li>
                        <a href={`/twinStars/${index}`}><strong>{twinStars.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index