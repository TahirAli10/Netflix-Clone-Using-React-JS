import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronDown } from 'react-icons/fa';
import CustomNextArrow from '../component/customNextArrow';
import CustomPrevArrow from '../component/customPrevArrow';
import MoviePage from './moviePage';

const MoviesList = ({ movieObj, heading }) => {
  const movies = movieObj;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [containerClass, setContainerClass] = useState('');

  const handleResize = () => {
    if (window.innerWidth <= 760) {
      setContainerClass('container-fluid slider');
    } else {
      setContainerClass('container slider');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  console.log('Selected', selectedMovie);

  const settings = {
    dots: false,
    responsive: null,
    cssEase: 'linear',
    centerMode: false,
    infinite: true,
    centerMode: true,
    speed: 1,
    cssEase: 'ease-in-out',
    focusOnSelect: false,
    cssEase: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div style={{ backgroundColor: '#1a1a1a' }}>
        <div className={`${containerClass} slider`}>
          <div className="sliderHeading">{heading}</div>
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id}>
                <Link to={"/movie/" + movie.id} >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="sliderImg"
                    style={{
                      objectPosition: 'center center',
                      objectFit: 'cover',
                      height: '300px',
                      width: '95%',
                      marginRight: '5px',
                    }}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        {selectedMovie && <MoviePage movieobject={selectedMovie} />}
        {console.log("selected Movie" + selectedMovie)}
      </div>
    </>
  );
};

export default MoviesList;
