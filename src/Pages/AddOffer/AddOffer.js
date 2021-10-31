import React from 'react';
import './AddOffer.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://creepy-vault-56324.herokuapp.com/offers', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Done successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-offer">
            <h2>Add Offer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Offer Name" />
        <textarea {...register("discription")} placeholder='Description' />
        <input {...register("place")} placeholder="Place" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image" />
        <input className="bg-primary" type="submit" />
        </form>
        </div>
    );
};

export default AddOffer;