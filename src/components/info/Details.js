import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Details() {

    let { username } = useParams();
    const [movie, setMovie] = useState([]);


    const getMovies = async () => {
        // const url="https://api.themoviedb.org/3/movie/latest?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US";
        const url = `https://api.themoviedb.org/3/movie/${username}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const data = await fetch(url);

        const parsedData = await data.json();
        console.log(parsedData);
        setMovie(parsedData);
        console.log(movie);
    }
    useEffect(() => {
        getMovies();
    },[ movie.id && username]);
    return (
        movie && <div style={{ height: '590px', width: '75vw', backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`, backgroundColor: 'rgb(0,0,0,0.5)',backgroundBlendMode:'darken' }}>

            <h1 style={{textAlign:'center',fontSize:'75px'}}> {movie.title} </h1>
            {
 
                <div style={{marginLeft:'10%'}}>
                  <div style={{float:'left'}} className='image'>
                    <img style={{position:'absolute',top:'30%',left:'30%'}} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                    </div>
                    <div style={{ paddingLeft:'15%',marginLeft:'25% ',paddingTop:'5%',width:'55%'}}className='overview'>
                        <h3 style={{ color: 'white' }}>{movie.overview}</h3>
                        <h3 style={{ color: 'white' }}>Popularity:<span style={{color:`${movie.popularity>60?'orange':'red'}`}}>{movie.popularity}</span></h3>
                    </div>
                </div>


            }
        </div>
    )
}

Details.propTypes = {}

export default Details
