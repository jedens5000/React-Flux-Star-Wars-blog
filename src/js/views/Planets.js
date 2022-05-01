import React, { useContext, Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { Context } from '../store/appContext' //API access
import { Cards, imgUrl } from "../component/Card";
import SetImg from "../component/SetImg";
import PropTypes from "prop-types";
// import Cards from "../component/Card";

const Planets = (props, imgUrl, imgSrc, imgPath) => {
  const {store, actions} = useContext(Context)
  // console.log(Context);
  return (
    <div>
				{/* {store.planets.map((planet, i) => {
				return (
          <div>
					  <div key={planet.id} name={planet.name} population={planet.population} climate={planet.climate} url={planet.url} id={planet.id} >
			      </div>
			    </div>
				)
        })}     */}
      <div className="card mb-3 bg-dark position-absolute top-50 start-50 translate-middle" >
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img src={'https://starwars-visualguide.com/assets/img/planets/8.jpg'} className="img-fluid rounded-start" alt="planet" />
            {/* <Card.Img variant="top" src={imgUrl} /> */}
            {/* <Card.Img variant="top" src={SetImg} /> */}
            {/* <SetImg /> */}
            {/* <Card.Img variant="top" src={SetImg} /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">Lucas ipsum dolor sit amet organa luuke droid mandalorians dagobah luke lando lando zabrak sidious. Skywalker calamari chewbacca wicket mace. Yoda hutt dagobah fisto jango dooku secura. Ponda wedge coruscant mustafar calrissian c-3p0 skywalker darth yavin. Calamari lobot chewbacca skywalker. Hutt padmé darth aayla utapau owen. Bespin coruscant hutt hutt wampa leia. Wedge hutt jade qui-gon coruscant. Amidala darth calrissian sebulba yavin vader boba dantooine moff. Yavin hutt lobot antilles organa wicket luke jade.</p>            
            </div>
          </div>
        </div>
        <Card.Body>
        {/* <Card.Body className="float-end" key={planet.id} name={planet.name} classification={planet.classification} language={planet.language} url={planet.url}> */}
          <Card.Title>{props.name}</Card.Title>
            <Card.Text >
              <span>Population: {props.population}</span>
              <span>Climate: {props.climate}</span>
              <span>Terrain: {props.terrain}</span>          
              <span>Surface Water: {props.surface_water}%</span>          
            </Card.Text>
        </Card.Body>
      </div>
    </div>
  )
}

Planets.propTypes = {    
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
}


export default Planets;