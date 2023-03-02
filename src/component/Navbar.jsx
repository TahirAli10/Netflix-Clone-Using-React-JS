import React, { Component, useState , useEffect, useContext} from "react";
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import p1 from "../images/p1.jpg"
import HeaderContent from "./headerContent";
import MovieContext from "../context/movieContext";
const Navbar = ({movieObject}) => {
    const {favMovie, setFavMovie}  = useContext(MovieContext)
  const [isActive, setIsActive] = useState(true);
  const [notificationCounter, setNotificationCounter] = useState(0);
  const [dp, setdp] = useState(p1);
  const [menuToggle, setMenuToggle] = useState(false);
  const [bellToggle, setBellToggle] = useState(false);
    const movie = movieObject;
    
  useEffect(()=>{
    setNotificationCounter(favMovie.length )
  })

 function handleBellToggle (){
  console.log("Toggel")
    setBellToggle(!bellToggle)
  }
 function handleToggle (){
    setMenuToggle(!menuToggle)
  }
  
  function handleClick() {
    
      setIsActive(!isActive);

    
  }
  return (
    <>
   
        <nav className=" navbar navbar-expand-md navbar-light ">
          <a className="navbar-brand" href="#">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              alt=""
              width={100}
            
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tv Shows
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ">Movies</a>
              </li>
            </ul>

            <div className="search-container row mr-1">
              <div className={`search-box ${isActive  ? 'active' : ''}`}>
                <input type="text" className="searchInput" placeholder="Search..." />
              </div>
              <button className="search-button" onClick={handleClick}>
              <FaSearch style={{color: "White" }} />
              </button>
            </div>

            <div className="bell mr-2">
              <button className="bellIcon"  onClick={handleBellToggle}>
              <div className="counter">{notificationCounter}</div>
              <FaBell />
              </button>
              {bellToggle && (
              <ul className="bellToggle">
                <li>Added To Favorites</li>
                {favMovie.map(obj =>(
                  <li key={obj.id}>{obj.title} </li>
                ))}
              </ul>
              )}
            </div>  

            <div className="d-flex"> 
              <img src={dp} width={30} alt="" className="mr-2  rounded-circle"/>
              <div><FaChevronDown className="dpImage"   size={10} onClick={handleToggle} />
              
              {menuToggle && (
              <ul className="menu">
                <li>Profile</li>  
                <li>Setting</li>  
              </ul>
              )}
              </div>
            </div>
          </div>
        </nav>
       
                            
    </>
  );
};

export default Navbar;
