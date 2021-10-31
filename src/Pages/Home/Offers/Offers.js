import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import "./Offers.css";

const Offers = () => {
    const [offers, setOffers]= useState([]);
    useEffect( ()=> 
    fetch('http://localhost:5000/offers')
    .then(res => res.json())
    .then (data => setOffers(data))
    ,[]);
    return (
       <div id='offers'>
           <h2 className="text-primary mt-3">Choose Your Destination</h2>
            <div className="offer-container">
            {
              offers.map(offer => <Offer
              key={offer.id}
              offer={offer}
              ></Offer>)   
            }
        </div>
       </div>
    );
};

export default Offers;