import React from 'react';
import './card.css';
import {ImArrowUp,ImArrowDown} from 'react-icons/im'

function Card(props) {

  return (
    <div className="post_card">
      <div className="posts_header">
      <a href={"https://www.reddit.com/"+props.actual_link}>
          <span className="posts_title">{props.title}</span>
        </a>
        <span className="author_name">Posted by:{props.author}</span>
      </div>
        <div className="posts_desc">{props.desc}</div>
        <div className="posts_content">
          <div>
            <div><ImArrowUp />{props.upvotes} </div>
            <div><ImArrowDown />{props.downvotes}</div>
          </div>
          {/* <img className="posts_img" src={props.link} /> */}
          {props.isvideo?
            // <video width="320" height="240" controls autoplay>
            //   <source src={props.video_link} type="video/mp4"/>
            // </video>
            <video autoPlay playsInline muted src={props.video_link} />
            :
            (props.link.includes("jpg")||props.link.includes("png"))?
              <img className="posts_img" src={props.link} />
              :
              <img className="posts_img" src={props.thumbnail} />
            
          }
        </div>
        {/* <div>{props.subreddit_link}</div> */}
        <div className="subreddit_link">You can check out more like this in <a href={"https://www.reddit.com/"+props.subreddit_link}>{props.subreddit_topic}</a></div>
        <div className="card-footer">
          <span>Reports:{props.reports==null?0:props.reports}              </span>
          <span>Comments:{props.comments}</span>
        </div>
        {/* </div> */}
    </div>
  );
}

export default Card;
