import axios from "axios";

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SEARCH_MOVIES ='SEARCH_MOVIES';
export const ADD_TO_WISHLIST='ADD_TO_WISHLIST';
export const WATCH_SUCCESS='WATCH_SUCCESS';
export const TOPRATED_SUCCESS='TOPRATED_SUCCESS';

export const fetchMoviesSuccess=(movies)=>{
    return{
        type:'FETCH_MOVIES_SUCCESS',
        payload:movies,
    }
}
export const setDescription=(description)=>({
    type:"SET_DESCRIPTION",
    payload:description,
})
export const fetchMovieFailure=(error)=>{
    return{
        type:"FETCH_TODOS_FAILURE",
        payload:{error},
    };
};
export const searchMovies=(query)=>{
    return{
        type:"SEARCH_MOVIES",
        payload:query,
    };
};


export const fetchMovies=()=>{
    return (dispatch)=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0ebbbc7d5d5a26c452757ea608df1945')
        .then((response)=>{
            const movies=response.data.results;
            dispatch(fetchMoviesSuccess(movies));
        })
        .catch((error)=>fetchMovieFailure(error))
    }
}

/* tv shows api */
export const fetchPopularSuccess=(watchList)=>{
return{
    type:"WATCH_SUCCESS",
    payload:watchList,
}
}

export const watchmovie=()=>{
    return (dispatch)=>{
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0ebbbc7d5d5a26c452757ea608df1945')
        .then((response)=>{
            const watchList=response.data.results;
            dispatch(fetchPopularSuccess(watchList));
        }).catch((error)=>console.log(error))
    }
}

/* "top rated" */
export const topSuccess=(rated)=>{
    return{
        type:"TOPRATED_SUCCESS",
        payload:rated,
    }
}

export const fetchTopRated=()=>{
    return(dispatch)=>{
        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=0ebbbc7d5d5a26c452757ea608df1945')
        .then((response)=>{
            const rated=response.data.results;
            dispatch(topSuccess(rated));
        }).catch((error)=>console.log(error))
    }
}