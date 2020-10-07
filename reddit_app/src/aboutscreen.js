import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutscreen.css';
import User_card from './user_card';

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
  
    useEffect(() => {
      fetchData();
    });

  return (
    <div>
        <img src={user.icon_img} />
        <div>Welcome {user.name}...</div>
        { <ul>
            <div className="topic">Popular users</div>
        {popular_user.map((item) => (
          <li key={item._id}>
            <User_card 
                name={item.data.title}
                image={item.data.icon_img}
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
