import React, { useEffect, useState } from 'react'
import './Card.css'
import instance from '../instance';

function Card({title,fetchUrl,isPoster}) {
    // console.log(props.isPoster);
    // console.log(props);
    const [movies,setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original";

   const fetchData = async()=>{
    const response = await instance.get(fetchUrl)
    // console.log(response.data.results);
    setMovies(response.data.results)
   }
   console.log(movies);

   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div className='row'>

        <h3>{title}</h3>
        <div className="movie-row">
      {
        movies.map(item=>(  <img  className={`movie ${isPoster?'movie-poster':'movie'}`}  src={`${base_url}${ isPoster?item.poster_path :item.backdrop_path}`} alt=""/>))
      
      }
        </div>
    </div>
  )
}

export default Card