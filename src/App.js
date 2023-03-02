import logo from './logo.svg';
import React, { Component, useContext,useState} from 'react';
import './App.css';
import Main from './component/main';
import MoviePage from './component/moviePage';
import { Route, Routes } from 'react-router-dom';
import MovieContext from './context/movieContext';
import FavoriteMovies from './component/favoriteMovies';
function App() {
  const [favMovie ,setFavMovie] =  useState([])
   
  return (
    <>
    <MovieContext.Provider value={{ favMovie, setFavMovie }}>
   <Routes>
    {/* <Route exact  path={"/MoviePage"} component={MoviePage} /> */}
    <Route   path={"/movie/:id"} element={<MoviePage />} />
    <Route   path={"/movie/favoriteMovie"} element={<FavoriteMovies />} />
    <Route path={"/"} element={<Main />}/>
    </Routes>
    </MovieContext.Provider>
    </>
  );
}

export default App;
