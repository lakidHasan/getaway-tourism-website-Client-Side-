import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const{name, image, text}= review;

    return (
        <div className="comment">
            <div><img src={image} alt="" /></div>
            
            <div>
            <h1>{name}</h1>
            <p>{text}</p>
            </div>
        </div>
    );
};

export default Review;