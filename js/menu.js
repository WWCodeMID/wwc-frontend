$(document).ready(function() {
	//Instanciamos nuestro objeto storage creado, con la clave
	var clave = 'carro_compras';
	var storage = new Lista(clave);

	//Funcion para desplegar las imagenes en el menu cuando son seleccionadas en la lista
	$( "#comida" ).click(function( event ) {
	  var target = $( event.target );
	  target = target[0].textContent;
	  $("#img-comida").removeClass();
	  if(target == "Helado") {
	  	$('#img_comida').addClass('icecream padding center-block');
	  	$('#text_comida').html(target+" $20");
	  } else if(target == "Hamburguesa") {
	  	$('#img_comida').addClass('burguer padding center-block');
	  	$('#text_comida').html(target+" $20");
	  } else if(target == "Sandwich") {
	  	$('#img_comida').addClass('sandwich padding center-block');
	  	$('#text_comida').html(target+" $20");
	  } else {
	  	$('#img_comida').addClass('hotdog padding center-block');
	  	$('#text_comida').html(target+" $20");
	  }
	});

	//Se agrega un escucha de tipo storage a documento para crear nuestro localStorage
	$(document).bind('storage', function (e) {
		console.log(e.key);
		//Desplegamos, si existen, las actividades anteriores
		actualizarLista(storage.obtenerActividades());
	});

	//Cuando hagamos click en la imagen de la comida, se agrega al carro de compras
	$('#img_comida').click(function(e) {
		e.preventDefault();
		var actividad = $('#text_comida')[0].innerHTML;
		if(storage.agregarActividad(actividad)) {
			console.log("Se agregó la actividad");
			//Cada que agregamos una nueva actividad tenemos que actualzar la lista
			actualizarLista(storage.obtenerActividades());
		}
	});

	//Actualizamos la lista
	function actualizarLista(actividades){
		var lista = document.querySelector('#compras');
		console.log(document.querySelector('#compras'));
		lista.innerHTML = "";
		if(actividades != null) {
			for(i in actividades) {
				var actividad = actividades[i];
				var elemento = document.createElement('li');
				$(elemento).addClass('list-group-item');
				elemento.innerHTML = actividad;
				lista.appendChild(elemento);
			}
		}
	};

	actualizarLista(storage.obtenerActividades());
	
});