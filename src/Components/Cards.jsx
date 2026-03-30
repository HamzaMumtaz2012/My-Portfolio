import React from 'react'

const Cards = (props) => {
  return (
    <div className='card-container'>
      <div className="card">
        <img src={props.src} alt="" />
        <h2>{props.Title}</h2>
        <p>{props.Description}</p>
      </div>
    </div>
  )
}

export default Cards
