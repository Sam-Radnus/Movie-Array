import React from 'react'
import PropTypes from 'prop-types'
import {Link ,useNavigate} from 'react-router-dom';
import MidCard from './secondary/MidCard';
import {useState,useEffect} from 'react';
import '../App.css';

function Featured(props) {
    let {FeatureName,limit,location,FeatureURL}=props;
      
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
       
       getMovies();
   
    },[movie.length])
    const getMovies=async()=>{
      const url=`${FeatureURL}`;
        const data=await fetch(url);
        const parsedData=await data.json();
       // console.log(location)
      //  console.log(parsedData.results);
        setMovie(parsedData.results); 
       
     }
  return (
  
    <div  style={{marginTop:'2vh'}}className='1'>
      
   <div className="tag" style={{display:'inline',width:'100%'}}><p> <span style={{color:'rgb(255,0,77)',fontSize:'50px'}}>{props.FeatureName}</span><Link style={{position:'absolute',textDecoration:'none',color:'grey',cursor:'pointer',marginTop:'30px',right:'2vw'}} to={`/${location}`}>See All <i className="fa-solid fa-angle-right"></i> </Link></p></div>
       <div className='row'>
       {movie.slice(0,limit).map(element=>(
          <div className="col ">
          {movie.length > 0 && <MidCard Feature={location} media={element.media_type?element.media_type:''} id={element.id} imageURL={`https://image.tmdb.org/t/p/w300/${element.backdrop_path}`} title={element.title?element.title:element.name}/> }
           </div>
       ))}
       </div>
        </div>

  )
}

Featured.propTypes = {}

export default Featured
