import React, { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom';
import "./netflix2.css";
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Overview = () => {
  const location = useLocation();
  console.log(location?.state);
  const name = location?.state.Name;
  const Poster = location?.state.Poster;
  const overview = location?.state.Overview;
  const Language = location?.state.Language;
  const Date = location?.state.R_Date;
  const Popularity = location?.state.Popularity;
  const Genre = location?.state.Genre;

  // Mapping of genre IDs to their corresponding names
  const genreIdToName = {
    10759: 'Action & Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    10762: 'Kids',
    9648: 'Mystery',
    10763: 'News',
    10764: 'Reality',
    10765: 'Sci-Fi & Fantasy',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'War & Politics',
    37:'Western'
  };

  const [wishlistItems, setWishlistItems] = useState([]);
  const AddtoList=()=>{
    axios.get('http://localhost:3001/popular')
    .then((response)=>setWishlistItems(response?.data))
    .catch((error)=>console.log(error))
  }

  useEffect(()=>{
    AddtoList()
  },[])


  const handleAdd=()=>{
    const isItemInWishlist = wishlistItems.some((item) => item.name === name);

    if (isItemInWishlist) {
        alert("This item is already in your wishlist.");
      } else {
        axios.post("http://localhost:3001/popular", { name, Poster, overview, Date, Popularity })
          .then(result => {
            if (result?.status === 201) {
              AddtoList();
            }
          })
          .catch(error => console.log(error));
      }
    };

  return (
    <>
      <div className='overview'>
        <img src={`https://image.tmdb.org/t/p/w500${Poster}`} alt="description" height={310} width={290} className='img_s' />
        <div>
          <h3>{name}</h3>
          <div style={{display:"flex"}}>
          {Genre.map((id) => {
            const genreName = genreIdToName[id];
            if (genreName) {
              return (
                <div key={id}>
                  <button style={{ backgroundColor: "red", marginBottom: "5px", color: "white", border: "1px solid transparent", marginRight: "5px" ,borderRadius:"5px"}}>
                    {genreName}
                  </button>
                </div>
              );
            } else {
              return null; 
            }
          })}
          </div>
          <h5><u>Overview</u></h5>
          <h6>{overview ? overview : "None"}</h6>
          <p style={{ color: 'white' }}>Language : {Language} </p>
          <p>Release_date: {Date}</p>
          <p>Popularity: {Popularity ? Popularity : "none"}</p>
          <Button onClick={handleAdd}>+ Add to watchList</Button>
        </div>
      </div>
    </>
  );
}

export default Overview;
