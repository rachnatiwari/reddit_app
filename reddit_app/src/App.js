import React, { useEffect } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './index.css';
import Subreddit from './subreddit';
import Aboutscreen from './aboutscreen';
import Nav from './nav';

function App(){

    return (
    <BrowserRouter>
    <div>
        <Route  path="/subreddit" render={() => (<Subreddit />)} />
        <Route path="/about" render={() => (<Aboutscreen />)} />
    </div>
    </BrowserRouter>
  );
}

export default App;
