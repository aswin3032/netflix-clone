import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'

function Banner({fetchUrl}) {
//  console.log(props.fetchUrl);
// to store data
const base_url = "https://image.tmdb.org/t/p/original/";
const [movie,setMovie] = useState({})
const fetchData = async()=>{
  const response = await instance.get(fetchUrl)
  // to access a particular object (movie) from an array(response.data.results)
  //console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
  setMovie (response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
}
console.log(movie);
useEffect(()=>{
  fetchData()
},[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
      <div className="banner-details">
        <h1>{movie.original_title}</h1>
        <button className='btn btn-danger'>play</button>
        <button className='btn btn-outline-light ms-4'>more info</button>
        <h3>{movie.overview?.slice(0,200)}... </h3>
      </div>
    </div>
  )
}

export default Banner