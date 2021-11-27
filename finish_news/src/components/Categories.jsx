import React from 'react'; 
import './categories.css';

import technology from './img/technology.png';
import politics from './img/court1.png';

import sport from './img/football1.png';
import health from './img/healthcare1.png';

import economy from './img/economy.png';
import note from './img/music.png';

import animals from './img/pawprint.png';
import showbusiness from './img/backstage.png';

import moves from './img/clapperboard.png';
import recipes from './img/chef.png';   


const Categories = React.memo(function Categories({activeCategory, items , onClickCategory}) {
        

    return (
                <ul>
                    <li className={activeCategory === null ? 'category active' : 'category'} onClick={() => onClickCategory(null)}>
                        ТОП
                    </li>

                    {items &&
                    items.map((name, index) =>(
                        <li 
                        onClick={() => onClickCategory(index)} 
                        key={`${name}_${index}`} 
                        className={activeCategory === index ? 'category active ' : 'category'}
                        >
                        {name}
                        </li>
                   ))
                }
                </ul>
            )
})

export default Categories


// https://newsdata.io/api/1/news?apikey=pub_23386e541b0e8603c4ea1888942ca10d653a&domain=nytimes&category=technology
