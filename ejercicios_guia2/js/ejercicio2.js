function casada(){
	var sexo = document.getElementById("id_cmb_sexo").value
	sexo = parseInt(sexo);
	if(sexo==2){
		document.getElementById("id_txt_apellidoCasada").disabled =true;
	
	}
	else {
		document.getElementById("id_txt_apellidoCasada").disabled=false;
	}
}
function guardar(){
	var dui =document.getElementById("id_txt_dui").value;
	var nit =document.getElementById("id_txt_nit").value;
	var nup =document.getElementById("id_txt_nup").value;
	var isss =document.getElementById("id_txt_isss").value;
	var primerApellido =document.getElementById("id_txt_primerApellido").value;
	var nombres =document.getElementById("id_txt_nombres").value;
	if( dui==""){
		document.getElementById("id_txt_dui").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_dui").style.backgroundColor="#F5F5F5";
	}
	if( nit==""){
		document.getElementById("id_txt_nit").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_nit").style.backgroundColor="#F5F5F5";
	}
	if( nup==""){
		document.getElementById("id_txt_nup").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_nup").style.backgroundColor="#F5F5F5";
	}
	if( isss==""){
		document.getElementById("id_txt_isss").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_isss").style.backgroundColor="#F5F5F5";
	}
	if( primerApellido==""){
		document.getElementById("id_txt_primerApellido").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_primerApellido").style.backgroundColor="#F5F5F5";
	}
	if( nombres==""){
		document.getElementById("id_txt_nombres").style.backgroundColor="red";
	}
	else {
		document.getElementById("id_txt_nombres").style.backgroundColor="#F5F5F5";
	}
}