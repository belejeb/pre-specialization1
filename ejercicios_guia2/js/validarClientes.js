function validarClientes(){

  var codigo = document.getElementById('codigo').value;
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var dui = document.getElementById('DUI').value;

  if (codigo=="") {

    document.getElementById('mensaje1').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje1').style.display='none';
  }

  if (nombre=="") {

    document.getElementById('mensaje2').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje2').style.display='none';
  }

  if (apellido=="") {

    document.getElementById('mensaje3').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje3').style.display='none';
  }

  if (dui=="") {

    document.getElementById('mensaje4').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje4').style.display='none';
  }

}
