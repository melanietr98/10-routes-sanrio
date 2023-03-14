import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.sanrioDanshi.map((sanrioDanshi, index) => 
                    <li>
                        <a href={`/sanrioDanshi/${index}`}><strong>{sanrioDanshi.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index