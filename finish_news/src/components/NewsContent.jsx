import React from 'react';
import NewsCard from './NewsCard';
import { useSelector } from 'react-redux';
import NewsLoadingCard from './NewsLoadingCard';

const NewsContent = ({items}) =>{

    const isLoaded = useSelector(({news}) => news.isLoaded)

    return (
        <div>
            { isLoaded
              ? items.map((obj) => <NewsCard key={obj.title} {...obj}/>) 
              : Array(10).fill(0).map((_, index) => (<NewsLoadingCard key={index}/>))
            }

         
        </div>
    )
}

export default NewsContent
