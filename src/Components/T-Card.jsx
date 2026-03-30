import React from 'react'

const TCard = (props) => {
  return (
    <div className={`t-card ${props.className || ''}`}>
      <div className="img-container">
        <img src={props.src} alt="" />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
    </div>
  );
}

export default TCard
