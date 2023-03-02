import React, { Component } from 'react';
import netflixLogo from '../images/netflixLogo.png'
import { BeatLoader } from 'react-spinners';

const CustomSpinner = () => {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" , width:"100%", height: "100vh", backgroundColor:"red"}}>
        <img src={netflixLogo} alt="your-image-alt" style={{color:"white", width: "200px", height: "100px" }} />
        
      </div>
    );
  };
export default CustomSpinner;  