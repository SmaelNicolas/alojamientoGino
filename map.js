var map = new ol.Map({
	target: "map",
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM(),
		}),
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-61.541938, -39.002735]),
		zoom: 17,
	}),
});
