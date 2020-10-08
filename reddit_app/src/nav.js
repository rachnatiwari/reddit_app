import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState(null);

    async function fetchData() {
      const res = await fetch("https://www.reddit.com/user/RachnaTiwari/about.json");
      res
        .json()
        .then(res => setUser(res.data))
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
    });

  return (
    <div>
          <nav className="navbar">
          <Link to="/about">
            <img id="user_img" onClick={select_profile} src={user.icon_img} />
          </Link>
          <Link to="/subreddit/myposts" ><span className="area-title" id ="myposts" onClick={select_myposts}>Myposts</span></Link>
          <Link to="/subreddit/hot" ><span className="area-title" id ="hot" onClick={select_hot}>Hot</span></Link>
          <Link to="/subreddit/top" ><span className="area-title" id ="top" onClick={select_top}>Top</span></Link>
          <Link to="/subreddit/rising" ><span className="area-title" id ="rising" onClick={select_rising}>Rising</span></Link>
          </nav>
    </div>
  );
}

export default Nav;
