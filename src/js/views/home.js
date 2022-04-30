import React, { useContext } from 'react'
import { Card, Button, Col } from 'react-bootstrap';
import { Context } from '../store/appContext' //API access
// import Card from 'react-bootstrap/Card'
import { Cards } from "../component/Card";

export const Home = () => {
	const {store, actions} = useContext(Context)
	// const planetImg = 'https://starwars-visualguide.com/assets/img/planets/' + planet[i] + '.jpg';
	return (
		<>
			<div className='flex-row d-flex w-100 overflow-scroll'>
				{store.planets.map((planet, i) => {
				return (
					<div>      
						{/* <Cards key={planet.id} name={planet.name} population={planet.population} climate={planet.climate} url={planet.url.replace(/\D/g,'')} /> */}
						<Cards key={planet.id} name={planet.name} population={planet.population} climate={planet.climate} url={planet.url} id={planet.id} />
					</div>
				)})}    
			</div>
			<div className='flex-row d-flex w-100 overflow-scroll'>
				{store.species.map((specie, i) => {
				return (
					<div>      
						<Cards key={specie.id} name={specie.name} classification={specie.classification} language={specie.language} url={specie.url} />
					</div>
				)})}    
			</div>
			<div className='flex-row d-flex w-100 overflow-scroll'>
				{store.vehicles.map((vehicle, i) => {
				return (
					<div>						   
						<Cards key={vehicle.id} name={vehicle.name} model={vehicle.model} passengers={vehicle.passengers} url={vehicle.url} />
					</div>
				)})}    
			</div>
  		</>
	)
  
};
