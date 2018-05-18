function guardar(){
	Notification.requestPermission();
var nombres = document.getElementById("id_txt_nombres").value;
var apellidos= document.getElementById("id_txt_apellidos").value;
var sexo=document.getElementById("id_cmb_sexo").value;
var icono="";
var mensaje="";

if (sexo=="1"){
	icono = "../images/female.png";
	mensaje="Hola "+nombres+" "+apellidos+"bienvenida.";
}
else {
	icono = "../images/male.png";
	mensaje="Hola "+nombres+" "+apellidos+"bienvenido.";
}
var title ="Ingresar al sistema univo";
var extra={
	icon : icono,
	body: mensaje
}
var notificacion = new Notification( title,extra);
setTimeout(function(){notificacion.close()},5000);
notificacion.onclick=function(){
	if (sexo=="1")
	{
			window.open('http://shop.mango.com/SV/mujer/accesorios/zapatos', '_blank');
	}
	else 
	{
		window.open('http://www.carroya.com/', '_blank');
		}
	}
}