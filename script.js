require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
          container: "viewDiv" // Div element
        });

 });
