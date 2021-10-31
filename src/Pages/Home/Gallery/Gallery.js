import React from 'react';
import "./Gallery.css";
import photo1 from "../../../images/Gallary/gallery (1).jpg";
import photo2 from "../../../images/Gallary/gallery (2).jpg";
import photo3 from "../../../images/Gallary/gallery (3).jpg";
import photo4 from "../../../images/Gallary/gallery (4).jpg";
import photo5 from "../../../images/Gallary/gallery (5).jpg";
import photo6 from "../../../images/Gallary/galley(6).jpg";

const Gallery = () => {
    return (
        <div id="gallery">
            <h2 className="text-primary mt-5 mb-3">Here is Our Some Memories </h2>
            <div className="gallery">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;