import axios from 'axios';

export const fetchNews = (category) => (dispatch) => {
    axios.get(`http://localhost:3010/news?category=${category}`).then(({data}) => {
           dispatch(setNews(data));
    });
};


export const setNews = (items) => ({
    type: 'SET_NEWS',
    payload: items,
});

