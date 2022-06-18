mapboxgl.accessToken = 'pk.eyJ1IjoicGFwYWpha2VkZXYiLCJhIjoiY2w0NzBnODE1MGRjYzNjb3J0Z3pwZTJmOCJ9.lAFCXMtgFqBMGhF5QVXAgg'
let currentMarkers = []

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14
})

async function run(){
	const locations = await getBusLocations()
	const date = (date = new Date()) => {
		const formattedDate = `${date.getMonth() + 1} ${date.getDate()}, ${date.getFullYear()}`
		const formattedTime = `${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2,'0')}:${date.getSeconds().toString().padStart(2,'0')} ${date.getHours() >= 12 ? 'PM' : 'AM'}`

		return {date:formattedDate, time:formattedTime}
	}
	console.log(`last refreshed: ${date().date} @ ${date().time}`)

	await currentMarkers.forEach((marker, index) => {
		currentMarkers[index].remove()
		if (index === currentMarkers.length - 1) {
			currentMarkers = []
		}
	})

	if (await currentMarkers.length !== 0) {
		console.log(`not all markers removed -> ${date().date} @ ${date().time}`)
	}
	
	locations.forEach(location => {
		const lng = location.attributes.longitude
		const lat = location.attributes.latitude
		const marker = new mapboxgl.Marker()
			.setLngLat([lng,lat])
			.addTo(map)
		currentMarkers.push(marker)
	});
	document.getElementById('num-buses').innerText = locations.length
	document.getElementById('refresh-time').innerText = date().date
	document.getElementById('refresh-date').innerText = date().time
	setTimeout(run, 10000)
}

async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip'
	const response = await fetch(url)
	const json = await response.json()
	return json.data
}