import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';
import movieReducer from './movieReducer';
const rootReducer = combineReducers({
    favorite: favoriteReducer,
    movies: movieReducer
});
export default rootReducer;