import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div id="card">
        {console.log(props)}
        <img src={props.image} alt="image" />
        <div id="description"> <div>{props.name}</div>{props.desc.substring(0, 100)}...</div>
        <div id="card-footer"> <a href={props.link}>Show post</a> </div>
    </div>
  );
}

export default Card;
