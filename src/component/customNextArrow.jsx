import React, { Component } from 'react';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div  className={`slick-arrow slick-next `}  onClick={onClick} style={{ position: 'absolute', top: '50%', left: '95%', zIndex: '1', transform: 'translateY(-50%)', color:"red" , backgroundColor:"none"}}>
        
      </div>
    );
}
 
export default CustomNextArrow;

