import axios from 'axios';

import { FaPlay , FaPlus  } from 'react-icons/fa';
import { useParams } from 'react-router';
import React, { Component, useState , useEffect, useContext} from "react";
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import p1 from "../images/p1.jpg"
import HeaderContent from "./headerContent";
import Navbar from './Navbar';
import Footer from './footer';
import MovieContext from '../context/movieContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviePage = () => {
  const {favMovie, setFavMovie } = useContext(MovieContext)
  
  
  let params = useParams();


  const [movie,setMovie] = useState([])
  const handleUpdate=()=>{
    const isMovieExist = favMovie.some((m) => m.id === movie.id);
  if (!isMovieExist) {
    setFavMovie((prevFavMovies) => [...prevFavMovies, movie]);
    toast.success('Added to favorites!', {
      position: toast.POSITION.TOP_RIGHT,
    });

    
  } else {
    toast.warning('This movie is already in favorites!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  }

  {movie && console.log(movie)}
  const fetchData = async ()=>{
    await axios.get(`https://api.themoviedb.org/3/movie/${params?.id}?api_key=f4a467359aaaf0cade67c7d8de2b0281`).then((response) => setMovie(response.data))
  }
  useEffect(() => {
    fetchData();
  },[])
  
  let relaeseDate = movie?.release_date;
        relaeseDate = relaeseDate?.slice(0,4)
  const   backgroundStyle = movie && movie.backdrop_path  ? {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    width: " calc(100vw )",
    objectFit: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }: {};


    return (
      
      <>
      {movie && (
           
    <div>
       <ToastContainer />
      <div className="backgroundStyle img-fluid pt-2 " style={backgroundStyle}>
      <div className="container" >
      <Navbar movieObject={params} />
      <div style={{paddingTop:"200px", paddingBottom:"200px"}} >
        <div>
            <div className='title'>{movie.title}</div>
            <div className='row pl-3 ' style={{marginBottom:"15px"}}>
                <div className='IMDb'>IMDb</div>
             
                <div className='movieDetails'>{relaeseDate}</div>
                <div className='movieDetails'>{movie.vote_average}</div>
             
            </div>
            <div className='overview'  style={{marginBottom:"15px"}}>{movie.overview}</div>
            <div className='row pl-3 '>
                <button className='btn d-flex justify-centent-center align-items-center' style={{backgroundColor: "white", paddingRight: "20px"}}><FaPlay size={12} /> <span style={{fontSize:"small", paddingLeft: "12px"}}>Lecture</span> </button>
                <button className=' d-flex justify-centent-center align-items-center ml-3' style={{border: "none", color:"none" , backgroundColor: "transparent"}} ><FaPlus  size={18} color={"white"} onClick={handleUpdate}/>   </button>
            
            </div>
            </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    )}
        
      </>
    );
    
  };

  
  export default MoviePage;

  
  
  