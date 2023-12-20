/* import React, { useEffect ,useState} from 'react';
import "./netflix.css";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { fetchMovies, setDescription } from "./actions/MovieActions";
import Logo from "./images/netflix.jpg"
import Logo1 from "./images/sear.jpg.jpg";

const Netflix = () => {
  const [searchItem, setSearchItem] = useState('');

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const description = useSelector((state) => state.movies.description);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const showDescription = (movie) => {
    dispatch(setDescription({
      title: movie.title,
      overview: movie.overview,
      poster: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      date: movie.release_date,
    }));
  };



  const filterMovies=movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

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


      {description ? (
        <div style={{ display: "flex", color: "white" }}>
          <div style={{ backgroundColor: "black", width: "800px", paddingLeft: "20px" }}>
            <h2 className='head'>{description.title}</h2>
            <p className='para'>{description.overview}</p>
            <Button variant="danger" className='m-2'>Play now</Button>
            <Button className='m-2'>Add to WishList</Button><br /><br />
            <h6 style={{ color: "white" }}>Release Date : {description.date}</h6>
          </div>

          <div
            className='description'
            style={{
              backgroundImage: `url(${description.poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: "400px",
              flexDirection: 'column',
            }}>
          </div>
        </div>
      ):(
        <div style={{ display: "flex", color: "white" }}>
          <div style={{ backgroundColor: "black", width: "100vw", paddingLeft: "20px" }}>
            <h2 className='head'>Asian Action Movies</h2>
            <p className='para'>Laugh, cry, sigh, scream, shout or whatever you feel like with these comedies, dramas, romances, thrillers and so much more, all hailing from Asia.</p>
            <Button variant="danger" className='m-2'>Play now</Button>
            <Button className='m-2'>Add to WishList</Button><br /><br />
            <h6 style={{ color: "white" }}>Release Date : 22-10-2023</h6>
          </div>

        </div>
      )}

      <div className='mov'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" height="200px" width="180px" className='img1' onClick={() => showDescription(movie)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Netflix;
 */

import React, { useEffect, useState } from 'react';
import "./netflix.css";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { fetchMovies, setDescription } from "./actions/MovieActions";
import Logo from "./images/netflix1.jpg"
import Logo1 from "./images/sear.jpg.jpg";
//import axios from 'axios';
import {Link} from "react-router-dom";


const Netflix = () => {


  const [searchItem, setSearchItem] = useState('');

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const description = useSelector((state) => state.movies.description);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const showDescription = (movie) => {
    dispatch(setDescription({
      title: movie.title,
      overview: movie.overview,
      poster: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      date: movie.release_date,
    }));
  };

  const handleSearch = () => {
    dispatch(fetchMovies(searchItem));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );  //if it contains searchItem,it returns true.

  const handleSignOut=()=>{
    localStorage.removeItem('Email')
    localStorage.removeItem('Password')
  }

  return (
    <>
      <div className='navbar'>
        <div className='nav1'>
          <img src={Logo} alt="netfliximg" height={90} width={160} />
          <li>Home</li>
          <li><Link to="/Wishlist">WishList</Link></li>
          <li><Link to="/TvShows">Tv Shows</Link></li>
        </div>

        <div className='nav2'>
          <input
            type="text"
            placeholder='search movies'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <button className='searchbtn' onClick={handleSearch}><img src={Logo1} alt="search" height={30} width={30} /> </button>
          <Button variant='danger' className='links' onClick={handleSignOut}><Link to="/">Sign Out</Link></Button>
        </div>
      </div>

      {description ? (
        <div style={{ display: "flex", color: "white" }}>
          <div style={{ backgroundColor: "black", width: "800px", paddingLeft: "20px" }}>
            <h2 className='head'>{description.title}</h2>
            <p className='para'>{description.overview}</p>
            <Button variant="danger" className='m-2' >Play now</Button>
            <Button className='m-2'>+ Add to WishList</Button><br /><br />
            <h6 style={{ color: "white" }}>Release Date : {description.date}</h6>
          </div>

          <div
            className='description'
            style={{
              backgroundImage: `url(${description.poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: "400px",
              flexDirection: 'column',
            }}>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", color: "white" }}>
          <div style={{ backgroundColor: "black", width: "100vw", paddingLeft: "20px" }}>
            <h2 className='head'>Asian Action Movies</h2>
            <p className='para'>Laugh, cry, sigh, scream, shout or whatever you feel like with these comedies, dramas, romances, thrillers and so much more, all hailing from Asia.</p>
            <Button variant="danger" className='m-2'>Play now</Button>
            <Button className='m-2'>Add to WishList</Button><br /><br />
            <h6 style={{ color: "white" }}>Release Date : 22-10-2023</h6>
          </div>
        </div>
      )}

      <div className='mov'>
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" height="200px" width="180px" className='img1' onClick={() => showDescription(movie)} />
          </div>
        ))}
      </div>


    </>
  )
}

export default Netflix;
