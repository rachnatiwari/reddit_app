import React from 'react';
import './card.css';

function Card(props) {

  return (
    <div className="post_card">
      {/* <div className="posts_header"> */}
      <a href={"https://www.reddit.com/"+props.actual_link}>
          <div className="posts_title">{props.title}</div>
        </a>
        <div>By: {props.author}</div>
        <div>{props.desc}</div>
        <div className="posts_content">
          <div>{props.upvotes}  </div>
          <div>{props.downvotes} </div>
          <img className="posts_img" src={props.link} />
        </div>
        <div>{props.subreddit_link}</div>
        <div>{props.subreddit_topic}</div>
        <div className="card-footer">
          <span>{props.reports}            </span>
          <span>{props.comments}</span>
        </div>
        {/* </div> */}
    </div>
  );
}

export default Card;
