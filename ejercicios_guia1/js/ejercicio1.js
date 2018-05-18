function calculadoraIMC(){
	Notification.requestPermission();
	var imagen = document.getElementById("insertarImagen");
	var IMC=0;
	var pesoKG=0;
	var estaturaMTS=0;
	var clasificacion="";
	var peso=document.getElementById("id_nmb_peso").value;
	var estatura=document.getElementById("id_nmb_estatura").value;
	var nombres = document.getElementById("id_txt_nombres").value;
	var apellidos= document.getElementById("id_txt_apellidos").value;
	var sexo=document.getElementById("id_cmb_sexo").value;
	var icono="";
	var mensaje="";

	peso= parseFloat(peso);
	estatura = parseFloat(estatura);
	pesoKG= peso /2.20462;
	estaturaMTS= estatura/100;
	IMC = pesoKG/ Math.pow(estaturaMTS,2);
	if (IMC <18){
		clasificacion="peso bajo";
		imagen.innerHTML="<img src=\"../imagenes/delgado.png\">";
	
	}
	else if (IMC >= 18 && IMC <= 24.9){
		clasificacion="normal";
		imagen.innerHTML="<img src=\"../imagenes/normal.png\">";
	}
	else if (IMC >= 25 && IMC <= 26.9){
		clasificacion="sobrepeso";
		imagen.innerHTML="<img src=\"../imagenes/sobrepeso.png\">";
	}
	else if (IMC >= 27 && IMC <= 29.9){
		clasificacion= "Obesidad grado I Riesgo relativo alto para desarrollar enfermedades cardiovasculares";
		imagen.innerHTML="<img src=\"../imagenes/obesidadI.png\">";
	}
	else if (IMC >= 30 && IMC <= 39.9){
		clasificacion= "Obesidad grado II Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares";
	imagen.innerHTML="<img src=\"../imagenes/obesidadII.png\">";
	}
	else if (IMC >=40){
		clasificacion = "Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares ";
	imagen.innerHTML="<img src=\"../imagenes/obesidadIII.png\">";
	}
	else {
		clasificacion= "datos erroneos";
	}
	if (sexo=="1"){
	icono = "../imagenes/female.png";
	mensaje="Hola "+nombres+" "+apellidos+" "+clasificacion+" IMC= "+ IMC.toFixed(2)+" "+ "bienvenida.";
}
else {
	icono = "../imagenes/male.png";
	mensaje="Hola "+nombres+" "+apellidos+" "+clasificacion+" IMC=  "+ IMC.toFixed(2)+" "+"bienvenido.";
}
var title ="sugerencia de ejercicios";
var extra={
	icon : icono,
	body: mensaje
}
var notificacion = new Notification( title,extra);
setTimeout(function(){notificacion.close()},10000);
notificacion.onclick=function(){
	if (sexo=="1")
	{
			window.open('https://www.beachbody.com/product/fitness_programs/21-day-fix-simple-fitness-eating.do#sm.0000ltp8iv18kcogrpp22ytfjf8ul', '_blank');
	}
	else 
	{
		window.open('https://www.beachbody.com/product/fitness_programs/weight_loss/focus-t25-workout.do#sm.0000ltp8iv18kcogrpp22ytfjf8ul', '_blank');
		}
	}
	
	document.getElementById("id_td_IMC").innerHTML= IMC.toFixed(2);

}