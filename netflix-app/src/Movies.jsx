import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./netflixMovies.css";
import Logo from "./images/netflix1.jpg";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Movies = () => {
    const[showMovie,setShowmovie]=useState([]);
    const navigate=useNavigate();

    const fetchMovies=()=>{
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=0ebbbc7d5d5a26c452757ea608df1945")
        .then((response)=>{
            console.log(response?.data.results);
            setShowmovie(response?.data.results)
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        fetchMovies();
    },[])

  return (
    <>
    <div className='navbar'>
        <img src={Logo} alt="hello" height={100} width={200} />
        <h5><Link to="/Wishlist">WishList</Link></h5>
        <Button variant='danger'><Link to="/">Sign out</Link></Button>
    </div>
    <h2 style={{textAlign:"center",marginTop:"10px"}} >Top Rated</h2>
    <div className='movieContainer'>
      {
        showMovie.map(({id,title,poster_path,overview,original_language,release_date,origin_country,popularity,genre_ids})=>(
            <div key={id}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} height={300} width={200}  className='movieimg' 
            onClick={()=>navigate(`/Movies/${id}`,{
                state:{
                  ID:id,
                  Name:title,
                  Overview:overview,
                  Poster:poster_path,
                  Language:original_language,
                  R_Date:release_date,
                  Country:origin_country,
                  Popularity:popularity,
                  Genre:genre_ids,
                }
              })}
            />
            <p >{title}</p>
            </div>
        ))
      };
    </div>
    </>
  )
}

export default Movies;
