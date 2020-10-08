import React, { useEffect, useState } from 'react';
import './composts.css';
import Card from './Card';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Subreddit(props) {
    const [posts, setPosts] = useState([]);
    const [error, setErrors] = useState(null);

    async function fetchData() {
      const res = await fetch("https://www.reddit.com/"+props.category+".json");
      res
        .json()
        .then(res => setPosts(res.data.children))
        .catch(err => setErrors(err));
    }

    const select_hot = () => {
      document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#hot").classList.add("navbar-select");
    }
    const select_myposts = () => {
      document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#myposts").classList.add("navbar-select");
    }
    const select_top = () => {
      document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#top").classList.add("navbar-select");
    }
    const select_rising = () => {
      document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#rising").classList.add("navbar-select");
    }
    const select_profile = () => {
      document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#user_img").classList.add("navbar-select");
    }
  
    useEffect(() => {
      fetchData();
      // document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#"+props.category).classList.add("navbar-select");
    });

    {var classNumber = 1;}

  return (
    <div>
      <Nav />
      {/* <nav className="sub-navbar">
        <span className="area-title" id ="subreddit" onClick={select_subreddit}><Link to="/subreddit" >Subreddit</Link></span>
      </nav> */}
    { <ul className="posts_page">
        {posts.map((item) => (
          <li key={item._id}>
            <Card 
                title={item.data.title}
                author={item.data.author}
                upvotes={item.data.ups}
                downvotes={item.data.downs}
                reports={item.data.num_reports}
                comments={item.data.num_comments}
                link={item.data.url}
                image={item.data.thumbnail}
                subreddit_topic={item.data.subreddit}
                subreddit_link={item.data.subreddit_name_prefixed}
                actual_link={item.data.permalink}
                desc={item.data.self_text}
            />
          </li>
        ))}
      </ul>
    }
    </div>
  );
}

export default Subreddit;
