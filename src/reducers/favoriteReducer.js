import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from "../actions/favoritesActions";

export const initialState = {
    displayFavorites: false,
    favorites: [
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            if (state.favorites.find(movie => movie.id === action.payload.id)) {
                alert("Bu film zaten favorilerinizde mevcut!");
                return state;}
                else {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default reducer;