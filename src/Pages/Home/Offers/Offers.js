import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import "./Offers.css";

const Offers = () => {
    const [offers, setOffers]= useState([]);
    useEffect( ()=> 
    fetch('https://creepy-vault-56324.herokuapp.com/offers')
    .then(res => res.json())
    .then (data => setOffers(data))
    ,[]);
    return (
       <div id='offers'>
           <h2 className="text-primary mt-3">Choose Your Destination</h2>
            <div className="offer-container">
            {
              offers.map(offer => <Offer
              key={offer._id}
              offer={offer}
              ></Offer>)   
            }
        </div>
       </div>
    );
};

export default Offers;