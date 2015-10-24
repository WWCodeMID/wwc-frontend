function Lista(clave) {
	//Declaramos la lista con la clave que recive
	this.clave = clave;
	//Funciones
	//Funcion para agregar actividadess
	this.agregarActividad = function(actividad) {
		//validamos que el navegador sea compatible
		if(this.validarNavegador()) {
			//Comprobamos elementos si hay existentes
			if(localStorage.getItem(this.clave)) {
				//Si hay, instanciamos los elementos en nuesta variable (como arreglo)
				var actividades = JSON.parse(localStorage.getItem(this.clave));
			} else {
				//Si no declaramos un arreglo vacio
				var actividades = [];
			}
			//Agregamos la nueva actividad al final de la lista
			actividades.push(actividad);
			//Colocamos toda la lista en nuestro localStorage, parametros, Clave y Arreglo de Elementos
			localStorage.setItem(this.clave,JSON.stringify(actividades));
			return true; //Regresamos que se cumplio todo
		}
		//Si todo esto no funiono, o no fue compatible regresa un falso
		return false;
	}
	//Funcion para Obtener las actividades
	this.obtenerActividades = function() {
		//Si hay elementos en la lista, regresa como json, el elemento de local
		//requiere el parametro de clave
		if(localStorage.getItem(this.clave) != "undefined"){
			return JSON.parse(localStorage.getItem(this.clave));
		}
		//Si no hay actividades, regresa nada
		return null;
	}
	//Funcion para eliminar actividades
	this.eliminarActividad = function(actividad) {
		//Obtenemos toda la lista de actividades
		var actividades = JSON.parse(localStorage.getItem(this.clave));
		//Interamos la el arreglo de actividades con .filter que recive una funcion
		actividades = actividades.filter(function(i) {
			//La variable i, es la actividad por actividad en la lista
			//comparandola mientras que sea diferente de la actividad para borrar
			//Si filter retorna true concerva el elemento pero si retorna false, lo elimina
			return i != actividad;
		});
		//Reinstanciamos nuestro local con las actividades menos la actividad
		localStorage.setItem(this.clave,JSON.stringify(actividades));
	}
	//para eliminar todo, solo tenemos que borrar la clave, que juega papel como localidad de memoria
	this.eliminarActividades = function() {
		localStorage.removeItem(this.clave);
	}
	//Para validad el navegador
	this.validarNavegador = function(){
		console.log(typeof(Storage));
		//Si el objeto storge no existe totalemente. el navegador nos es compatible
		if(typeof(Storage) !== "undefined") return true;
		return false;
	}
}