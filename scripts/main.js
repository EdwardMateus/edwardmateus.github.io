/*document.querySelector("html").onclick = function(){
	alert("¡A mí no me de click!");
}
*/

var miImagen = document.querySelector("img");
miImagen.onclick = function(){
	var miSrc = miImagen.getAttribute("src");
	if(miSrc === "images/chrome_logo.png"){
		miImagen.setAttribute("src", "images/firefox_logo.png");
	}else{
		miImagen.setAttribute("src", "images/chrome_logo.png");
	}
}

var miBoton = document.querySelector("button");
var miTitulo = document.querySelector("h1");

function seleccionnombre(){
	var miNombre = prompt("Por favor, ingrese su nombre.");
	localStorage.setItem("nombre", miNombre);
	miTitulo.innerHTML = "¡Hola, " + miNombre + "!";
}

if(!localStorage.getItem("nombre")){
	seleccionnombre();
}else{
	var storedName = localStorage.getItem("nombre");
	miTitulo.innerHTML = "¡Bienvenido, " + storedName + "!";
}

miBoton.onclick = function() {
	seleccionnombre();
}