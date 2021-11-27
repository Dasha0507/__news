const initialState = {
    items: [],  
    isLoaded: false 
}
 
const news = (state = initialState, action) => {
    if(action.type === 'SET_NEWS')
    {
        return {
            ...state,
            items: action.payload,
            isLoaded: true
        }
    }
    return state;
}

export default news;