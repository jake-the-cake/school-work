mapboxgl.accessToken = 'pk.eyJ1IjoicGFwYWpha2VkZXYiLCJhIjoiY2w0NzBnODE1MGRjYzNjb3J0Z3pwZTJmOCJ9.lAFCXMtgFqBMGhF5QVXAgg'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14
})

const marker = new mapboxgl.Marker()
	.setLngLat([-71.092761, 42.357575])
	.addTo(map)