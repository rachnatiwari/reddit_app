import React, { useEffect, useState } from 'react';
import './index.css';
import Card from './Card';
import Nav from './nav';

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
  
    useEffect(() => {
      fetchData();
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
