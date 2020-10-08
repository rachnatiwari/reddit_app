import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutscreen.css';
import User_card from './user_card';
import Trending_subreddit from './trending_subreddit';
import Nav from './nav';

function Aboutscreen() {
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState(null);
    const [popular_user, setPopular_user] = useState([]);

    async function fetchData() {
        var res = await fetch("https://www.reddit.com/user/RachnaTiwari/about.json");
        res
            .json()
            .then(res => setUser(res.data))
            .catch(err => setErrors(err));
        res = await fetch("https://www.reddit.com/users/popular.json");
        res
          .json()
          .then(res => setPopular_user(res.data.children))
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
      // document.querySelector(".navbar-select").classList.remove("navbar-select");
      document.querySelector("#user_img").classList.add("navbar-select");
      fetchData();
    });

  return (
    <div>
        <Nav />
        <img className="profile_photo" src={user.icon_img} />
        <div className="topic">Welcome {user.name}...</div>
        <div className="trending_subred">
            <Trending_subreddit />
        </div>
        { <ul>
            <div className="topic">Popular users</div>
        {popular_user.map((item) => (
          <li key={item._id}>
            <User_card 
                name={item.data.title}
                image = {item.data.icon_img.includes("styles.redditmedia.com")?"https://image.flaticon.com/icons/png/512/52/52191.png":item.data.icon_img}
                link={item.data.url}
                desc={item.data.public_description}
            />
          </li>
        ))}
      </ul>
    }
    </div>
  );
}

export default Aboutscreen;
