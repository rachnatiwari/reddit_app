import React, { useEffect, useState } from 'react';
import './aboutscreen.css';

function Display_subreddit(props) { 
    const [errors, setErrors] = useState(null);
    const [details, setDetails] = useState([]);

    async function fetchData() {
        var res = await fetch("https://www.reddit.com/r/"+ props.name +"/about.json");
        res
            .json()
            .then(res => setDetails(res.data))
            .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
    });

  return (
    <div>
        {(details.icon_img==""|| details.icon_img==null)?
            <div>
                <a href={ "https://www.reddit.com/r/"+props.name}>
                    <img src={"https://image.flaticon.com/icons/png/512/52/52191.png"} />
                    <div className="title"> {props.name} </div>
                </a>
                <div> {details.public_description} </div>
            </div>
            :
            <div>
                <a href={ "https://www.reddit.com/r/"+props.name}>
                    <img src={details.icon_img} />
                    <div className="title"> {props.name} </div>
                </a>
                <div> {details.public_description} </div>
            </div>
        }
    </div>
  );
}

export default Display_subreddit;
