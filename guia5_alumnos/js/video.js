function iniciar()
{
	document.getElementById("btn_play").addEventListener("click", play, false);
	document.getElementById("btn_pause").addEventListener("click", pause, false);
	document.getElementById("btn_stop").addEventListener("click", stop, false);
	document.getElementById("btn_bucle").addEventListener("click", bucle, false);
	document.getElementById("btn_ampliar_reduce").addEventListener("click", amp_red, false);
	document.getElementById("btn_fullscreen").addEventListener("click", full_screen, false);

	document.getElementById("btn_volumen_up").addEventListener("click", function(){ cambiar_volumen(1);}, false);
	document.getElementById("btn_volumen_down").addEventListener("click", function(){ cambiar_volumen(2);}, false);
	document.getElementById("btn_volumen_muted").addEventListener("click", function(){ cambiar_volumen(3);}, false);
}

function play()
{
	document.getElementById('id_video').play();
}

function pause()
{
	document.getElementById('id_video').pause();
}

function stop()
{
	document.getElementById('id_video').currentTime = 0;
	document.getElementById('id_video').pause();
}

function bucle()
{
	if(document.getElementById('id_video').loop)
	{
		document.getElementById('img_btn_loop').src = '../imagenes/bucle.png';
		document.getElementById('id_video').loop = false;
	}
	else
	{
		document.getElementById('img_btn_loop').src = '../imagenes/no_loop.png';
		document.getElementById('id_video').loop = true;
	}
}

function amp_red()
{
	var video_width = document.getElementById('id_video').width;

	if(video_width == 640)
	{
		document.getElementById('id_video').width = 850;
		document.getElementById('img_btn_amp_red').src = '../imagenes/reduce.png';
	}
	else
	{
		document.getElementById('id_video').width = 640;
		document.getElementById('img_btn_amp_red').src = '../imagenes/ampliar.png';
	}
}

function full_screen()
{
	if(document.getElementById('id_video').requestFullscreen)
	{
		document.getElementById('id_video').requestFullscreen();
	}
	else if(document.getElementById('id_video').mozRequestFullscreen)
	{
		document.getElementById('id_video').mozRequestFullscreen(); // Firefox
	}
	else if(document.getElementById('id_video').webkitRequestFullscreen)
	{
		document.getElementById('id_video').webkitRequestFullscreen(); // Chrome and Safari
	}
}

function cambiar_volumen(tipo)
{
	var numero = 5;

	if(tipo == 1)//subir volumen
	{
		document.getElementById('id_video').muted = false;
		document.getElementById('id_video').volume = document.getElementById('id_video').volume + (numero / 100);
	}
	else if(tipo == 2)//baja volumen
	{
		document.getElementById('id_video').muted = false;
		document.getElementById('id_video').volume = document.getElementById('id_video').volume - (numero / 100);
	}
	else if(tipo == 3 && document.getElementById('id_video').muted)//quitar volumen
	{
		document.getElementById('id_video').muted = false;
		document.getElementById('img_btn_muted').src = "../imagenes/muted.png";
	}
	else if(tipo == 3 && !document.getElementById('id_video').muted)//quitar volumen
	{
		document.getElementById('id_video').muted = true;
		document.getElementById('img_btn_muted').src = "../imagenes/volumen_on.png";
	}
}

function pruebas()
{
	document.getElementById('id_video').width = 850;
}

window.addEventListener("load", iniciar, false);