import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import "./Reviewes.css";

const Reveiews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div id="reviews">
            <h1 className="text-primary mt-5 mb-3">Some Feedback Comment</h1>
            <div className='review-container'>
            {
                reviews.map(review=> <Review
                key={review.id}
                review={review}
                ></Review>)
            }
        </div>
        </div>
    );
};

export default Reveiews;