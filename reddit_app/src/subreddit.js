import React, { useEffect, useState } from 'react';
import './index.css';
import Card from './Card';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Subreddit(props) {
    const [posts, setPosts] = useState([]);
    const [error, setErrors] = useState(null);

    async function fetchData() {
      const res = await fetch("/sample");
      res
        .json()
        .then(res => setPosts(res))
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

  return (
    <div>
      <Nav />
    { <ul>
        {posts.map((item) => (
          <li key={item._id}>
            <Card 
                name={item.name}
                image={item.image}
                link={item.link}
                desc={item.desc}
            />
          </li>
        ))}
      </ul>
    }
    </div>
  );
}

export default Subreddit;
