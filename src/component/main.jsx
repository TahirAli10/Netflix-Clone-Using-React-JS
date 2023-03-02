import React, { Component , useState ,useEffect} from 'react';
import axios from 'axios';
import Header from './header';
import { Lines } from "react-preloaders";
import CustomSpinner from './customSpinner';
import MoviesList from './MoviesList';
import Footer from './footer';
export function Main() {
    const [trending, setTrending] = useState([]);
    const [tvShow, setTvShow] = useState([]);
    const [movies, setMovies] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let fetchData = async  ()  => {
      const responseTrending = await axios.get(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=f4a467359aaaf0cade67c7d8de2b0281'
      );
      const responseTvShow = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=f4a467359aaaf0cade67c7d8de2b0281'
      );
      const responseMovies = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=f4a467359aaaf0cade67c7d8de2b0281&language=en-US'
      );
      setTrending(responseTrending.data.results);
      setTvShow(responseTvShow.data.results);
      setMovies(responseMovies.data.results);
      setIsLoading(false);
    }
    useEffect(() => {
      fetchData();
    }, []);
 console.log(movies)
  
  
    return <>
    {isLoading ? (
        <><CustomSpinner /></>
      ) : (
        <>
          <Header movieObj={{ movie: movies[Math.ceil(Math.random() * movies.length)] }} />
        
          <MoviesList  movieObj={movies} heading={"Trending Movies"}/>
          <MoviesList  movieObj={tvShow} heading={"Action Movies "}/>
          <MoviesList  movieObj={trending} heading={"Trending Tv Shows"}/>
          <Footer />
        </>
      )}
        
    
 
    </> 
    
  }
  
export default Main;