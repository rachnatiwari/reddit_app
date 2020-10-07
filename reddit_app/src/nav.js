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
  
    useEffect(() => {
      fetchData();
      document.querySelector("#subreddit").classList.add("sub-navbar-select");
    });

    const select_subreddit = () => {
      document.querySelector(".sub-navbar-select").classList.remove("sub-navbar-select");
      document.querySelector("#subreddit").classList.add("sub-navbar-select");
  }

  return (
    <div>
        <Link to="/about">
          <nav className="navbar">
            <img id="user_img" src={user.icon_img} />
          </nav>
          </Link>
            {/* <span id="username"> Welcome {user.name}... </span> */}
          <nav className="sub-navbar">
            <span className="area-title" id ="subreddit" onClick={select_subreddit}><Link to="/subreddit" >Subreddit</Link></span>
          </nav>
    </div>
  );
}

export default Nav;
