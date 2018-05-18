function validarUsuarios(){

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var usuario = document.getElementById('usuario').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var passConfirm = document.getElementById('passConfirm').value;

  if (nombre=="") {

    document.getElementById('mensaje1').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje1').style.display='none';
  }
  if (apellido=="") {

    document.getElementById('mensaje2').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje2').style.display='none';
  }
  if (usuario=="") {

    document.getElementById('mensaje3').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje3').style.display='none';
  }

  if (email=="") {

    document.getElementById('mensaje4').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje4').style.display='none';
  }

  if (pass=="") {

    document.getElementById('mensaje5').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje5').style.display='none';
  }

  if (passConfirm=="") {

    document.getElementById('mensaje6').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje6').style.display='none';
  }

}
