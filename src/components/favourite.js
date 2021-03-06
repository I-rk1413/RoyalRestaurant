import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button,Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './loading';


function RenderMenuItem({ dish, deleteFavorite }) {
    return(
        <Media tag="li">
            <Media left middle>
                <Media object src={baseUrl + dish.image} alt={dish.name} width='100px' height='auto'/>
            </Media>
            <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(dish._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </Media>
        </Media>
    );
}

const Favourite=(props)=>{

    if(props.favorites.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>

        )
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }

    else if(props.favorites.favorites){
        const favorites=props.favorites.favorites.dishes.map((dish)=>{
            return(
                <div key={dish._id} className='col-12 mt-5'>
                    <RenderMenuItem dish={dish} deleteFavorite={props.deleteFavorite} />
               </div>
            )

        })

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Media list >
                    {favorites} 
                    </Media>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no favorites</h4>
                </div>
            </div>
        )
    }

}
export default Favourite;