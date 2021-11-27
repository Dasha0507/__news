import {  combineReducers } from 'redux';

import filterReducer from './filters';
import newsReducer from './news';

const rootReducer = combineReducers({
    filter: filterReducer, 
    news: newsReducer
})

export default rootReducer;