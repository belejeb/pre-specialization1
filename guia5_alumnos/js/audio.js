setInterval('cambiar_fondo()',5000);

function cambiar_fondo()
{
	var fondos = ["imagen1.gif", "imagen2.gif", "imagen3.gif", "imagen4.gif"];
	var total_fondos = fondos.length;
	var aleatorio_fondo = Math.floor((Math.random() * total_fondos) + 0 )
	document.getElementById("img_audio").src = "../imagenes/"+fondos[aleatorio_fondo];
}

function iniciar()
{
	document.getElementById("btn_volumen_up").addEventListener("click",function(){cambiar_volumen(1);},false);
	document.getElementById("btn_volumen_down").addEventListener("click",function(){cambiar_volumen(2);},false);
	document.getElementById("btn_play").addEventListener("click", play, false);
	document.getElementById("btn_pause").addEventListener("click", pause, false);
	document.getElementById("btn_stop").addEventListener("click", stop, false);
}

function play()
{
	document.getElementById('audio_track').play();
}

function pause()
{
	document.getElementById('audio_track').pause();
}

function stop()
{
	document.getElementById('audio_track').currentTime = 0;
	document.getElementById('audio_track').pause();
}

function cambiar_volumen(tipo)
{
	var numero = 10;
	if (tipo == 1)
	{
		document.getElementById('audio_track').volume = document.getElementById('audio_track').volume + (numero / 100);
	}

	else if (tipo == 2) 
	{
		document.getElementById('audio_track').volume = document.getElementById('audio_track').volume - (numero / 100);
	}
}

window.addEventListener("load", iniciar, false);


	
	


