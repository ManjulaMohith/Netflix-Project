import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import "./netflix2.css";
import { Button } from 'react-bootstrap';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchaddtoList=()=>{
    axios.get("http://localhost:3001/popular")
    .then((response)=>setWishlistItems(response?.data))
    .catch((error)=>console.log(error))
  }

  useEffect(()=>{
    fetchaddtoList()
  })

  /* deleting card */
  const handleDelete=(itemId)=>{
    axios.delete(`http://localhost:3001/popular/${itemId}`)
    .then((response)=>{
      if (response?.status === 200) {
        fetchaddtoList();
      }
    })
    .catch((error)=>console.log(error))
  }

  return (
    <>
    <h2 className='style'>My Watch-List</h2>
    <div className='card1'>
      
      {
        wishlistItems.map(({id,name,overview,Poster,Date,Popularity})=>(
          <div className='inner' key={id}>
            <img src={`https://image.tmdb.org/t/p/w500${Poster}`} alt="add" height={200}  width={200} className='picture' />
            <p>{name}</p>
            <Button variant="danger" onClick={()=>handleDelete(id)}>Remove</Button>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Wishlist;
