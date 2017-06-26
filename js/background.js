background();

// background :: initialize mapbox background map:
function background() {
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3JvdGVhdW1qIiwiYSI6ImNpam44Y215dTAwZDB0aG01emxvNm1pYzAifQ.vKk11AiB-97jJiL9joJAgw';
	var map = new mapboxgl.Map({
		container: 'bg-map',
		style: 'mapbox://styles/croteaumj/cj2i1qp8x000s2smpzwwky8gr',
		center: [-105, 40],
		zoom: 2.8,
		interactive: false
	});
}
