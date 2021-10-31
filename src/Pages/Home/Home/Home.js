import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Offers from '../Offers/Offers';
import Reveiews from '../Reviews/Reveiews';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Offers></Offers>
            <Reveiews></Reveiews>
            <Gallery></Gallery>
        
            </div>
    );
};

export default Home;