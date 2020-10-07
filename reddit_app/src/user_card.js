import React from 'react';
import './aboutscreen.css';

function User_card(props) { 
  return (
    <div id="user_card">
        <a href={ "https://www.reddit.com/"+props.link}>
            <img src={props.image} />
        </a>
        <span id="description"> <div>{props.name}</div>{props.desc}</span>
        {/* <div id="card-footer"> <a href={props.link}>About me...</a> </div> */}
    </div>
  );
}

export default User_card;
