import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import {watchmovie,fetchTopRated} from "./actions/MovieActions";
import "./netflix2.css";
import Logo from "./images/netflix1.jpg"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TvShows = () => {
  const navigate=useNavigate();
  const [selectedGenId,setSelectedGenId]=useState('');

    const dispatch = useDispatch();
    const watchList=useSelector((state)=>state.watchList.watchList)
    const rated=useSelector((state)=>state.rated.rated)

    useEffect(()=>{
        dispatch(watchmovie())
        dispatch(fetchTopRated());
        setSelectedGenId('all');
    },[dispatch])


    const handleGenreChange=(e)=>{
      const selectedId=e.target.value;
      setSelectedGenId(selectedId)
    }

   const filteredWatchList=
   selectedGenId!=='all'
   ? watchList.filter((show)=>show.genre_ids.includes(parseInt(selectedGenId)))
   :watchList;

   const filteredRated =
   selectedGenId !== 'all'
      ? rated.filter((rate) => rate.genre_ids.includes(parseInt(selectedGenId)))
      : rated;

  return (
    <>
    <div className='body'>
    <div className='navigation'>
    <img src={Logo} alt="netflix" />
    <h5 className='link'><Link to="/WishList">Wishlist</Link></h5>
    <h5 className='link'><Link to="/Movies">Movies</Link></h5>
    <div className='nav'>
    <label htmlFor='category' style={{marginTop:"25px",padding:"10px"}}>
        <select id='category' defaultValue='all' style={{backgroundColor:"#0047AB",color:"white",fontWeight:"bold"}}
         onChange={handleGenreChange}>
            <option value="35,80,16,10759,18">all</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="16">Animation</option>
            <option value="10759">Action & Adventure</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="10762">Kids</option>
            <option value="10763">News</option>
            <option value="10764">Reality</option>
            <option value="10768">War & politics</option>
            <option value="10766">soap</option>
            
        </select>
        </label>
   
    </div>
    </div>
    
    <h3 style={{color:"white",paddingLeft:"10%",paddingTop:"40px"}}>Popular Shows</h3>
    <div className='imgs'>
    {watchList &&
        filteredWatchList.map(({id, original_name, poster_path,origin_country,genre_ids,popularity,overview,original_language, name, first_air_date})=>(
            <div key={id} className='item'>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} height="250px" width="190px" alt="pic" className='pics' 
                onClick={()=>navigate(`/TvShows/${id}`,{
                  state:{
                    ID:id,
                    Name:original_name,
                    Overview:overview,
                    Poster:poster_path,
                    Language:original_language,
                    R_Date:first_air_date,
                    Country:origin_country,
                    Popularity:popularity,
                    Genre:genre_ids,
                  }
                })} />
                <p>{name}</p>
                <small>{first_air_date}</small>
            </div>
        ))
    }
    </div>
{/* rated */}
<h3 style={{color:"white",paddingLeft:"10%",paddingTop:"40px"}}>Top_Rated Shows</h3>
<div className='imgs'>
  {rated.length > 0 ? (
    filteredRated.map((Rate) => (
      <div key={Rate.id} className='item'>
        <img src={`https://image.tmdb.org/t/p/w500${Rate.poster_path}`} height="250px" width="190px" alt="picsss" className='pics'
        onClick={()=>navigate(`/TvShows/${Rate?.id}`,{
          state:{
            ID:Rate?.id,
            Name:Rate?.original_name,
            Overview:Rate?.overview,
            Poster:Rate?.poster_path,
            Language:Rate?.original_language,
            R_Date:Rate?.first_air_date,
            Country:Rate?.origin_country,
            Popularity:Rate?.popularity,
            Genre:Rate?.genre_ids,
          }
        })}
        />
        <p style={{color:"white"}}>{Rate?.name}</p>
        <small>{Rate?.release_date}</small>
      </div>
    ))
  ) : (
    <p>No rated movies available</p>
  )}
</div>
</div>
    </>
  )
}

export default TvShows;
