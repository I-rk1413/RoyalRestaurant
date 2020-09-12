import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {Loading } from './loading';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform} from 'react-animation-components';
import Brand from './Brand'


function RenderCard({item,isLoading,errMess}){
      if(isLoading){
        return(
            <Loading />
        );
    }

    else if(errMess){
                  return(
                      <h4>{errMess}</h4>
                  )
        }
          
    else{
        return(
            <React.Fragment>
            
                 <FadeTransform in 
                transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                 <Card>
                     <CardImg src={baseUrl+item.image} alt={item.name} style={{maxWidth:'100%',maxHeight:'200px'}}/>
                     <CardBody>
                         <CardTitle>{item.name}</CardTitle>
                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                         <CardText>{item.description}</CardText>
                     </CardBody>
                 </Card>
                 </FadeTransform>
            </React.Fragment>     

               );
           }

}



function Home(props){
    return(
    <React.Fragment>
    <Brand />
        <div className="container" style={{marginTop:'20px',marginBottom:'20px'}}>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />

                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} 
                        isLoading={props.promosLoading}
                        errMess={props.promosErrMess} />

                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.dish2} 
                        isLoading={props.dish2Loading} 
                        errMess={props.dish2ErrMess} />

                </div>
            </div>
        </div>
    </React.Fragment>    
    );
}

export default Home;