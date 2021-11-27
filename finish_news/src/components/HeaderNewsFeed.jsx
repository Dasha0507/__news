import React from 'react';
import './headernews.css'
import User from './img/User.png';


function HeaderNewsFeed() {
    return (
    <header>
        <div className ="container">
            <img className ="user" src={User}/>
            <p>Newspaper about everything</p>
        </div>
    </header>
    )
}

export default HeaderNewsFeed
