const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			species: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getSpecies: () => {
				fetch("https://swapi.dev/api/species/")
				// fetch(`https://swapi.dev/api/species/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({
							// species: data.results,
							species: data.results,
						});
					})
					.then(() => console.log(getStore().species));
			},			
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({
							planets: data.results,
						});
					})
					.then(() => console.log(getStore().planets));
			},
			getPlanetId: (id) => {
				fetch(`https://swapi.dev/api/planets/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({
							planetId: data.result,
						});
					})
					.then(() => console.log(getStore().planetId));
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then((res) => res.json())
					.then((data) => {
						setStore({
							vehicles: data.results,
						});
					})
					.then(() => console.log(getStore().vehicles));	
			}					
		}
	};
};

export default getState;
