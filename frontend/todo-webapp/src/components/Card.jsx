import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
          <h2>{props.title}</h2>  
          <h3>{props.content}</h3>
          <button>DELETE</button>
        </div>
    )
}

export default Card
