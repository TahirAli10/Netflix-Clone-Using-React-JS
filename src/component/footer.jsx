import React, { Component } from 'react';
import { FaFacebook , FaTwitter , FaInstagram  } from 'react-icons/fa';
const Footer = () => {
    return ( <> 
    <div style={{backgroundColor:'#1a1a1a'}}>
    <div className='container' >
        <div className='row footerIcons' style={{ paddingTop: '140px', paddingLeft: "13px"}}>
            <a href=""><FaFacebook size={40}  style={{color: "grey", marginRight: '10px'}}/></a>
            <a href=""><FaTwitter size={40}  style={{color: "grey",marginRight: '10px'}} /></a>
            <a href=""><FaInstagram  size={40}  style={{color: "grey"}}/></a>
        </div>
        <div className='row mt-5 mb-5'>
            <div className='col-md-4 col-12 mb-md-0 mb-5'>
                <div className='text-md-left text-center ' style={{color: "whitesmoke"}}>Mention Legales</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                
            </div>
            <div className='col-md-4 col-12 mb-md-0 mb-5'>
            <div className='text-md-left text-center' style={{color: "whitesmoke"}}>Mention Legales</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className='col-md-4 col-12'>
            <div className=' text-center text-md-left ' style={{color: "whitesmoke"}}>Mention Legales</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
                <div className='text-md-left text-center' style={{color:"grey"}}>Lorem ipsum dolor sit amet.</div>
            </div>

        </div>
        <div className='text-md-left text-center'  style={{color: "whitesmoke",paddingBottom:"20px"}}>@ 2021 English, Inc</div>
    </div>
    </div>
    </> );
}
 
export default Footer;