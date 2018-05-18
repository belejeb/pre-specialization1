
setInterval('cambiar_fondo()',5000);
var canciones =["audio1","audio2","audio3"];
var total_canciones= canciones.length;
function cambiar_fondo()
{
	var fondos          = ["imagen1.gif","imagen2.gif","imagen3.gif","imagen4.gif"];
	var total_fondos    = fondos.length;
	var aleatorio_fondo = Math.floor((Math.random() * total_fondos) + 0)
    document.getElementById("img_audio").src = "../imagenes/"+ fondos[aleatorio_fondo];
}
function iniciar()
{
document.getElementById("list_musicas").value=0;
 document.getElementById("btn_volumen_up").addEventListener("click",function(){cambiar_volumen(1);}, false);
 document.getElementById("btn_volumen_down").addEventListener("click",function(){cambiar_volumen(2);}, false);
 document.getElementById("btn_volumen_muted").addEventListener("click",function(){cambiar_volumen(3);}, false);
 document.getElementById("btn_play_pause").addEventListener("click",pause,false);
 document.getElementById("btn_stop").addEventListener("click",stop,false);
 document.getElementById("btn_previo").addEventListener("click",previo,false);
 document.getElementById("btn_next").addEventListener("click",next,false);
 document.getElementById('audio_track').addEventListener("ended",fin_track,false);
 
}function play_pause(){
	if(document.getElementById('audio_track').paused){
		document.getElementById("id_btn_play_pause").src="../imagenes/pause.png";
		document.getElementById('audio_track').play();
	}
	else{
			document.getElementById("id_btn_play_pause").src="../imagenes/play.png";
		document.getElementById('audio_track').pause();
	}
}
function previo(){
	var seleccionado= document.getElementById("list_musicas").value;
	var nuevo_seleccionar = seleccionado-1;
	if(seleccionado!= ""&& nuevo_seleccionar>=0){
		 document.getElementById("list_musicas").value=nuevo_seleccionar;
		 document.getElementById("id_btn_play_pause").src="../imagenes/pause.png";
		 document.getElementById("source_mp3").src="../audio/"+canciones[nuevo_seleccionar]+".mp3";
		 document.getElementById('audio_track').load();
		 document.getElementById('audio_track').play();
		
	}
	else{
		document.getElementById("list_musicas").value=0;
	}
}
function next(){
	var seleccionado = (document.getElementById("list_musicas").value)==""?0 :document.getElementById("list_musicas").value;
	var nuevo_seleccionar= parseInt(seleccionado)+1;
	if(nuevo_seleccionar< total_canciones){
		document.getElementById("list_musicas").value=nuevo_seleccionar;
		 document.getElementById("id_btn_play_pause").src="../imagenes/pause.png";
		 document.getElementById("source_mp3").src="../audio/"+canciones[nuevo_seleccionar]+".mp3";
		 document.getElementById('audio_track').load();
		 document.getElementById('audio_track').play();
	}
}
function stop(){

		 document.getElementById("id_btn_play_pause").src="../imagenes/play.png";
		 document.getElementById('audio_track').currentTime=0;
		 document.getElementById('audio_track').pause();
}
function cambiar_volumen(tipo){
	var numero =5;
	document.getElementById('audio_track').muted=false;
	if (tipo==1){
		document.getElementById('audio_track').volume=document.getElementById('audio_track').volume+(numero/100);
	}
	if (tipo==2){
		document.getElementById('audio_track').volume=document.getElementById('audio_track').volume-(numero/100);
	}
	if (tipo==3){
		document.getElementById('audio_track').muted=true;
	}
}
function fin_track(){
	 document.getElementById("id_btn_play_pause").src="../imagenes/play.png";
}
window.addEventListener("load",iniciar,false);