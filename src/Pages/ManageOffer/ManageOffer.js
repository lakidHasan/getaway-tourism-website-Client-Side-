import React, { useEffect, useState } from 'react';

const ManageOffer = () => {
    const [offers, setOffers] = useState([]);
    useEffect( ()=>{
        fetch('https://creepy-vault-56324.herokuapp.com/offers')
        .then(res=>res.json())
        .then(data => setOffers(data))
    }, []);

   const handleDelete = id =>{
       const url = `https://creepy-vault-56324.herokuapp.com/offers/${id}`;
       fetch(url, {
           method: 'DELETE'
       })
       .then(res=>res.json())
       .then(data => {
           console.log(data);
           if(data.deletedCount){
               alert('deleted')
            const remaining = offers.filter(offer => offer._id !==id);
            setOffers(remaining);
           }
           
       })
   }
    return (
        <div>
            <h2 className="text-primary">Manage offer</h2>
            {
                offers.map(offer => <div
                key={offer._id}>
                 <h2>{offer.name}</h2>
                  <button onClick={()=> handleDelete(offer._id)} className="btn btn-primary">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageOffer;