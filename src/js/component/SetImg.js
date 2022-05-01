import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Context } from "../store/appContext";
import getState from "../store/flux"

// const SetImg = props => {

export const SetImg = ( props, data, store, getState ) => {
    // const {store, actions} = useContext(Context)
        imgSrc =  'https://starwars-visualguide.com/assets/img/';
        storeUrl = props.url;   
    // ///////THIS CUTS THE URL AFTER THE .COM //////////////////////////////
        cutUrl = new URL(storeUrl).pathname;
    const storeName = cutUrl.substring(5, cutUrl.length).replace(/[^a-z]/gi, ''); 
    const indexId = cutUrl.substring(14, cutUrl.length - 1); 
        const imgPath = cutUrl.substring(5, cutUrl.length - 1);
    
        const imgUrl = imgSrc + imgPath + ".jpg";
    const id = cutUrl.substring(14, cutUrl.length - 1);
    console.log("This is the id: " + id);
    console.log("This is cutUrl: " + cutUrl);
    console.log("This is storeName: " + storeName);
    console.log("This is imgPath: " + imgPath);
    console.log("This is imgUrl: " + imgUrl);
    console.log("This is indexId: " + indexId);
    console.log("This is props url: " + props.url);

  return (
      <div>
          <Card.Img variant="top" src={imgUrl} />
            {console.log(imgUrl)}
      </div>
    )
};

SetImg.propTypes = {
    // PLANETS:
			id: PropTypes.string,
            name: PropTypes.string,
			rotation_period: PropTypes.string,
			orbital_period: PropTypes.string,
			diameter: PropTypes.string,
			climate: PropTypes.string,
			gravity: PropTypes.string,
			terrain: PropTypes.string,
			surface_water: PropTypes.string,
			population: PropTypes.number,
            url: PropTypes.string, 
// SPECIES:
			classification: PropTypes.string,
			designation: PropTypes.string,
			average_height: PropTypes.string,
			skin_colors: PropTypes.string,
			hair_colors: PropTypes.string,
			eye_colors: PropTypes.string,
			average_lifespan: PropTypes.string,
			homeworld: PropTypes.string,
			language: PropTypes.string,
// VEHICLES:
			model: PropTypes.string,
			manufacturer: PropTypes.string,
			cost_in_credits: PropTypes.string,
			length: PropTypes.string,
			max_atmosphering_speed: PropTypes.string,
			crew: PropTypes.string,
			passengers: PropTypes.string,
			cargo_capacity: PropTypes.string,
			consumables: PropTypes.string,
			vehicle_class: PropTypes.string,
// STARSHIPS (+ same as vehicle props above):
			hyperdrive_rating: PropTypes.string,
			MGLT: PropTypes.string,
			starship_class: PropTypes.string,
 
}

export default SetImg