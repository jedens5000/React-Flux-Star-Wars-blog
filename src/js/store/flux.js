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
					.then((res) => res.json())
					.then((data) => {
						setStore({
							species: data.results,
						});
					})
					.then(() => console.log(getStore().species));
			},			
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then((res) => res.json())
					.then((data) => {
						setStore({
							planets: data.results,
						});
					})
					.then(() => console.log(getStore().planets));
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
