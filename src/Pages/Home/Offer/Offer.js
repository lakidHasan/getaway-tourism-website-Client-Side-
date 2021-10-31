import React from 'react';
import { Link } from 'react-router-dom';
import "./Offer.css";

const Offer = ({offer}) => {
    const {_id, name, price, place, img, discription} = offer;
    return (
        <div className='offer'>
        <img src={img} alt="" />
        <h2>Name: {name}</h2>
        <h4>Place: {place}</h4>
        <h5>Price: {price}</h5>
        <Link to={`/booking/${_id}`}>
        <button className='btn btn-dark'>Pick Up Offer</button>
        </Link>
        </div>
    );
};

export default Offer;