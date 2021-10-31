import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Booking = () => {
    const {offerId} = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     
    const[offer, setOffer] = useState({});
    useEffect( ()=>{
       fetch(`http://localhost:5000/offers/${offerId}`)
       .then(res => res.json())
       .then(data => setOffer(data));
    }, [])

    const handleOrder = e =>{

    }
    return (
        <div className="booking">
           <div className="offer-details">
           <img src={offer.img} alt="" />
            <p>Details: {offer.discription}</p>
            <button className="btn btn-primary mb-3">Confirm Booking</button>
           </div>
           <div className="confirm-form">
               <h2>Pick Up Your Destination</h2>
             <form onSubmit={handleOrder}>
             <input defaultValue={offer.displayName} {...register("name")} />

            <input defaultValue={offer.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <input className="btn btn-primary" type="submit" />
             </form>
           </div>
        </div>
    );
};

export default Booking;