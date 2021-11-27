import React from 'react';
import { Link } from 'react-router-dom';
import './stickyfooter.css';
import Subscriptions from './img/agreement.png';
import News from './img/newstoday.png';
import Sections from './img/sections.png';
import Categories from './Categories';

import {setCategory} from '../redux/actions/filters';
import {useDispatch, useSelector} from 'react-redux';
import sections from '../data/categories';
// import {fetchNews} from '../redux/actions/news';

function StickyFooter() {

    const dispatch = useDispatch();

    const category = useSelector(({filters}) => filters)
    // // console.log(category)

    // React.useEffect(() => {
    //     dispatch(fetchNews());
    // }, [category])


    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const [visibleCategories, setvisibleCategories] = React.useState(false);
    const categoriesRef = React.useRef(); //сохраняет ссылку на DOM елемент и хранит актуальное значение

    const toggleVisibleCategories = () => {
        setvisibleCategories(!visibleCategories);
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(categoriesRef.current)){
           setvisibleCategories(false);
        }
    }

    React.useEffect(() => { //следит за эффектом компонента
        document.body.addEventListener('click', handleOutsideClick);
    }, []);


    return (
    <footer className="sticky_menu">
        <div className="container">
            <div className="my_subscriptions">
                <img src={Subscriptions}/>
                <div >
                    <Link to='/subscriptions' className="subscruptions">Подписки</Link>
                </div>        
            </div>
            <div className="my_news">
                <img src={News}/>
                <div>
                    <a href="#" className="news_today">Новости сегодня</a>
                </div>    
            </div>
            <div ref={categoriesRef} className="categories">
                <img src={Sections}/>
                <div>
                    <a onClick={toggleVisibleCategories} href="#" className="categories_filter">Категории</a>
                </div>
                    { visibleCategories && 
                        <div className = "sections_sticky">
                        <Categories activeCategory = {category}
                        onClickCategory={onSelectCategory}
                        items={sections}/>
                        </div>
                    }
                    
            </div>
        </div>
           
    </footer>
    )
}

export default StickyFooter
