//Funcion que ejecuta todo cuando carga	
$(document).ready(function() {
	//Variables globales
	var map;
	var marker;
	var me_marker;
	var geolocalizacion;
	var center_geo = new google.maps.LatLng(20.967100, -89.623701);

	//El mapa se lanza hasta que carga la pagina
	google.maps.event.addDomListener(window,'load',dibujarMapa);
	//Funciones
	function dibujarMapa() {
		//Opciones para el mapa
		var opcionesMapa = {
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		//Creamos el mapa
		map = new google.maps.Map(document.querySelector('#map'),opcionesMapa);
		//API navegacion de HTML5 diferente de maps
		navigator.geolocation.getCurrentPosition(function(posicion) {
			//Instanciamos nuestra geolocalizacion
			geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);
			//Creamos los marcadores
			//Meta
			marker = new google.maps.Marker({
				map: map,
				position:center_geo,
				visible: true
			});
			//YO
			me_marker = new google.maps.Marker({
				map: map,
				position:geolocalizacion,
				visible: true
			});
			//Centramos el mapa con nuestra localizacion
			map.setCenter(geolocalizacion);
			//El geo nos persigue en tiempo real y actualiza la pocicion del mapa
			navigator.geolocation.watchPosition(actualizarPosicion, function(error) {
					//Calback para el error, en caso de error
					console.log(error);
				}, {
					//Tiempo de vida de el refresh
					maximumAge: 0
				});
		},function(error) { 
			//Callback para el error 
			console.log(error);
		});
	}

	function actualizarPosicion(posicion) {
		geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);
		me_marker.setPosition(geolocalizacion);
		map.setCenter(geolocalizacion);
	}

});