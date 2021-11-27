import React from 'react';
import './newscard.css';



function NewsCard({title, full_description, link,  image_url}) {


    return (
        <div className ="post">
            <span className ="title">{title}</span>
            <p className ="post_description">
            {full_description}
            </p>
            <a href={link} className="link">{link}</a>  
            <img src={image_url}/> 
        </div>
    )
}

export default NewsCard
