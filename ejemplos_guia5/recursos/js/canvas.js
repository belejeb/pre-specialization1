function iniciar()
{
	var elemento = document.getElementById("lienzo");
	var lienzo = elemento.getContext("2");

	var imagen = new Image();
	imagen.src = "http://localhost:90/guia5_univo/imagenes/paisaje.jpg"

	imagen.addEventListener("load", function()
	{
		lienzo.drawImage(imagen,1,1,elemento.width,elemento.height);
		lienzo.font = "bold 20 px verdana, sans-serif";
		lienzo.fillStyle = "white";
		lienzo.textAling = "start";
		lienzo.traslate(190,300);
		lienzo.rotate(-Math.PI/180*25);
		lienzo.fillText("DERECHOS RESERVADOS UNIVO 2017",0,0);
	}, false);
}

window.addEventListener("load",iniciar,false);



