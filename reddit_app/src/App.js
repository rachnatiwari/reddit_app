import React, { useEffect } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './index.css';
import Subreddit from './subreddit';
import Aboutscreen from './aboutscreen';
import Composts from './composts';

function App(){

    return (
    <BrowserRouter>
    <div>
        <Route  path="/subreddit/myposts" render={() => (<Subreddit category={"myposts"}/>)} />
        <Route  path="/subreddit/top" render={() => (<Composts category={"top"}/>)} />
        <Route  path="/subreddit/hot" render={() => (<Composts category={"hot"}/>)} />
        <Route  path="/subreddit/rising" render={() => (<Composts category={"rising"}/>)} />
        <Route path="/about" render={() => (<Aboutscreen />)} />
    </div>
    </BrowserRouter>
  );
}

export default App;
