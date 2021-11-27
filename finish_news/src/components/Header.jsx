import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import Arrow from './img/arrow.png';

function Header() {
    return (
            <header>
                <div className="container">
                <Link to='/'>
                <img src={Arrow} className="arrow"/>
                </Link>
                <p>Newspaper about everything</p>
                </div>
            </header>
    )
}

export default Header
