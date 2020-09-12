import React from 'react';
import {  Jumbotron } from 'reactstrap';

const Brand=()=>{
    return(
        <Jumbotron style={{backgroundColor:' lightgray',borderBottom:'2px solid darkgray'}}>
        <div className="container">
            <div className="row row-header">
                <div className="col-6 col-sm-6">
                    <h1>Royal Restaurant</h1>
                    <p style={{fontSize:'20px',color:'black'}}>We take inspiration from the World's best cuisines, and create a 
                    unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
                <span className='col-6 col-sm-6 mx-auto'><img src="assets/images/logo.png"  style={{marginLeft:'40%'}} alt='Ristorente Confusion' /></span>
                
                
            </div>
            
        </div>
    </Jumbotron>

    )
}

export default Brand;
