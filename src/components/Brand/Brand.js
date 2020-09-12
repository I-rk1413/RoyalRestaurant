import React from 'react';
import {  Jumbotron } from 'reactstrap';
import './Brand.css';

const Brand=()=>{
    return(
        <Jumbotron style={{backgroundColor:' lightgray',borderBottom:'2px solid darkgray'}}>
        <div className="container">
            <div className="row row-header">
                <div className="col-sm-12 col-md-6">
                    <h1>Royal Restaurant</h1>
                    <p style={{fontSize:'20px',color:'black'}}>We take inspiration from the World's best cuisines, and create a 
                    unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                <div className='responsive'><img src="assets/images/logo.png"  style={{marginLeft:'100%'}} alt='Ristorente Confusion' /></div>
                
                
            </div>
            
        </div>
    </Jumbotron>

    )
}

export default Brand;
