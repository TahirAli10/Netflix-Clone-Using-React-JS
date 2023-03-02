import React, { Component } from 'react';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
  
    return (
      <div className="slick-arrow slick-prev" onClick={onClick} style={{ position: 'absolute', top: '50%', left: '3%', zIndex: '1', transform: 'translateY(-50%)', color:"red" , backgroundColor:"none"}}>
       
      </div>
    );
}
 
export default CustomPrevArrow;