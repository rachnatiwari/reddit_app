import React from 'react';
import './aboutscreen.css';

function User_card(props) { 
  return (
    <div id="user_card">
        <a href={ "https://www.reddit.com/"+props.link}>
            <img src={props.image} />
            <div className="title">{props.name}</div>
        </a>
        <div>{props.desc}</div>
    </div>
  );
}

export default User_card;

//styles.reddit