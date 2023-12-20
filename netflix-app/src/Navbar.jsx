import React,{ useState } from 'react';
import {Button} from "react-bootstrap"
import "./netflix.css";
import Logo from "./images/netflix.jpg"
import Logo1 from "./images/sear.jpg.jpg";
import { useDispatch,useSelector } from 'react-redux';
import {  searchMovies } from "./actions/MovieActions";

const Navbar = () => {
  const dispatch=useDispatch();
  const [searchItem ,setSearchItem]=useState("");
  const searchResults = useSelector((state) => state.movies.searchResults);
  
  const handleSearch=()=>{
    dispatch(searchMovies(searchItem));
  }

  return (
    <>
    <div className='navbar'>
      <div className='nav1'>
      <img src={Logo} alt="netfliximg"  height={80} width={150} />
      <li>Home</li>
      <li>Movies</li>
      <li>Latest</li>
      <li>My List</li>
      </div>

      <div className='nav2'>
        <input type="text" 
        placeholder='search movies'
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)} />
        <button className='searchbtn' onClick={()=>{handleSearch()}}><img src={Logo1} alt="search" height={30} width={30} /> </button>
        <Button variant='danger'>Sign Out</Button>
        
      </div>
    </div>

    {
      searchResults && (
        <div>
         <h2>results:</h2>
         <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )
    }
    </>
  )
}

export default Navbar
