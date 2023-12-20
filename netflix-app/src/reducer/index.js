import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const rootReducer=combineReducers({
    movies:movieReducer,
    watchList:movieReducer,
    rated:movieReducer,
})
export default rootReducer;