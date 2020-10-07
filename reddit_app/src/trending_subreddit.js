import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutscreen.css';
import Display_subreddit from './display_subreddit';

function Trending_subreddits() {
    const [errors, setErrors] = useState(null);
    const [trending, setTrending] = useState([]);

    async function fetchData() {
        var res = await fetch("https://www.reddit.com/api/trending_subreddits.json");
        res
            .json()
            .then(res => setTrending(res.subreddit_names))
            .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
    });

  return (
    <div>
        { <ul className="trending_subred">
            <div className="topic">Trending Subreddit you can follow</div>
        {trending.map((item) => (
          <li>
            <Display_subreddit 
                name={item}
            />
          </li>
        ))}
      </ul>
    }
    </div>
  );
}

export default Trending_subreddits;
