import React, { Component, useState , useEffect} from "react";
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';
import p1 from "../images/p1.jpg"
import HeaderContent from "./headerContent";
import Navbar from "./Navbar";
const Header = ({ movieObj }) => {
  
  const [isActive, setIsActive] = useState(true);
  const [notificationCounter, setNotificationCounter] = useState(0);
  const [dp, setdp] = useState(p1);
  const [menuToggle, setMenuToggle] = useState(false);
  
  const { movie } = movieObj;

  
  const   backgroundStyle = movie ? {
   backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
   width: " calc(100vw )",
   objectFit: "center",
   backgroundSize: "cover",
   backgroundPosition: "center center"
 }: {};

  
  
 function handleToggle (){
    setMenuToggle(!menuToggle)
  }
  
  function handleClick() {
    
      setIsActive(!isActive);

    
  }
  return (
    <>
    <div className="backgroundStyle img-fluid pt-2" style={backgroundStyle}>
      <div className="container" >
        <Navbar />

        {/* body of header */}
           <HeaderContent movieObj={{movie}} />
          
      </div>  
      </div>                          
    </>
  );
};

export default Header;
