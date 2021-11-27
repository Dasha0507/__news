import React from 'react';
import './newsfeed.css';
import { useSelector, useDispatch } from 'react-redux';

import Writing from'../components/img/writing.png';
import HeaderNewsFeed from '../components/HeaderNewsFeed';
import StickyFooter from '../components/StickyFooter';
import NewsContent from '../components/NewsContent';
import UserPostsForm from '../components/UserPostsForm';
import Modal from '../components/Modal';
import {fetchNews} from '../redux/actions/news';



function NewsFeed() {
    const dispatch = useDispatch();
    // const [news, setNews] = React.useState([]);
    const [modal, setModal] = React.useState(false);

    const category = useSelector(({filters}) => filters)//вытаскиваем категории из filters

    React.useEffect(() => {
        dispatch(fetchNews());
    }, [category]) //делаем запрос на сервер, передаем в зависимость категории(при изменении категории делать снова запрос)

    const { items } = useSelector(({news}) => {
        return {
            items: news.items,
        }
    });

    const createNews = (newPost) => {
        // setNews([{items}, newPost]);
        setModal(false);
    }
   
    return (
    <div>
        <HeaderNewsFeed/>
        <section>
        <div className ="newsPost">
        <div className ="container">
            <img onClick={() => setModal(true)} className ="writing" src={Writing}/>
            <Modal visible={modal} setVisible={setModal}>
            <UserPostsForm create={createNews}/>
            </Modal>
            <NewsContent items={items}/>
        </div>
        </div>
        </section>
        <StickyFooter/>   
    </div>
    )
}

export default NewsFeed
