function iniciar(){
	document.getElementById("generar").addEventListener("click", generar, false);
	document.getElementById("imprimir").addEventListener("click", imprimir, false);
}
function generar(){
	location.reload(true);
}
function imprimir(){
	window.print();
}
window.addEventListener("load",iniciar,false);