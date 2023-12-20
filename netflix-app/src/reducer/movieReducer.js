import { SET_DESCRIPTION } from "../actions/MovieActions"
import {FETCH_MOVIES_SUCCESS} from "../actions/MovieActions";
import { ADD_TO_WISHLIST } from "../actions/MovieActions";
import { SEARCH_MOVIES} from "../actions/MovieActions"
import {TOPRATED_SUCCESS} from "../actions/MovieActions"
import {WATCH_SUCCESS} from "../actions/MovieActions"
//import {ADD_TO_WISHLIST} from "../actions/MovieActions";

const initialState={
    movies:[],
    description:null,
    searchQuery: '',
    watchList:[],
    rated:[],

};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          movies: action.payload,
        };
        case SEARCH_MOVIES:
          return{
            ...state,
            searchQuery:action.payload,
          }
        case SET_DESCRIPTION:
            return{
                ...state,
                description:action.payload,
            }
          case TOPRATED_SUCCESS:
            return{
              ...state,
              rated:action.payload,
            }
            case ADD_TO_WISHLIST:
          return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
      case WATCH_SUCCESS:
      return {
        ...state,
        watchList: action.payload,
      };
            
      default:
        return state;
    }
  };
  
  export default movieReducer;