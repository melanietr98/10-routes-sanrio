import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.kuromi.map((kuromi, index) => 
                    <li>
                        <a href={`/kuromi/${index}`}><strong>{kuromi.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index