$(document).ready(function() {

	var storage = new Lista(clave);
	var clave = 'carro_compras';

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

	$(document).bind('storage', function (e) {
		console.log(e.key);
		actualizarLista(storage.obtenerActividades());
	});

	$('#img_comida').click(function(e) {
		e.preventDefault();
		var actividad = $('#text_comida')[0].innerHTML;
		if(storage.agregarActividad(actividad)){
			console.log("Se agregó la actividad");
			actualizarLista(storage.obtenerActividades());
		}
	});

	function actualizarLista(actividades){
		var lista = document.querySelector('#compras');
		lista.innerHTML = "";
		if(actividades != null){
			for(i in actividades){
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