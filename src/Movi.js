import React, { useEffect, useState } from 'react'

const Movi = () => {
const [list, setList] = useState();

 useEffect(()=>{
    
        
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99d7ca9e53msh1186f1ba9caac4ep15b613jsn414b3cd1c6ae',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US', options)
	.then(response => response.json())
	.then(response => console.log(response.tracks))
	.catch(err => console.error(err));        
      
    

 },[])
 console.log(list);
 if(list){
  return (
    <div className='movie' >
    {list.map( movie =>
    {
    const img="https://image.tmdb.org/t/p/w500"+movie.poster_path
    return (
        <div key={movie.id} id={movie.id}>
<img src={img} />
<h3>{movie.title}</h3>
<h5>{movie.overview}</h5>
        </div>
    )
    }
        )}
    </div>
  )
}
}

export default Movi