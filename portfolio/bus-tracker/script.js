mapboxgl.accessToken = 'pk.eyJ1IjoicGFwYWpha2VkZXYiLCJhIjoiY2w0NzBnODE1MGRjYzNjb3J0Z3pwZTJmOCJ9.lAFCXMtgFqBMGhF5QVXAgg'
const currentNarkers = []

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14
})

async function run(){
	const locations = await getBusLocations();
	console.log(` refreshed at ${new Date()}`);
	await currentNarkers.forEach((marker, index) => {
		currentNarkers[index].remove()
		currentNarkers.shift()
	})

	locations.forEach(location => {
		const lng = location.attributes.longitude
		const lat = location.attributes.latitude
		const marker = new mapboxgl.Marker()
			.setLngLat([lng,lat])
			.addTo(map)
		currentNarkers.push(marker)
	});
	
	setTimeout(run, 15000);
}

async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json = await response.json();
	return json.data;
}