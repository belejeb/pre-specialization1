function iniciar() {

	var elemento = document.getElementById('lienzo');
	var lienzo = elemento.getContext("2d");

	var imagen = new Image();
	imagen.src = "../imagenes/paisaje.jpg";

	imagen.addEventListener ("load", function()
	{
		lienzo.drawImage(imagen,1,1, elemento.width,elemento.height);
		lienzo.font 		= "bold 20px verdana, sans-serif";
		lienzo.fillStyle 	= "white";
		lienzo.textAlign 	="start";
		lienzo.translate(190,300);
		lienzo.rotate(-Math.PI/180*25);
		lienzo.fillText("DERECHOS RESERVADOS UNIVO 2017",0,0);
	}, false);
}

window.addEventListener("load",iniciar,false);