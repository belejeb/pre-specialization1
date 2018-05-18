function validarVenta(){

  var codigo = document.getElementById('codigo').value;
  var cantidad = document.getElementById('cantidad').value;
  var precioUnitario = document.getElementById('precioUnitario').value;
  var importe = document.getElementById('importe').value;


  if (codigo=="") {

    document.getElementById('mensaje1').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje1').style.display='none';
  }

  if (cantidad=="") {

    document.getElementById('mensaje2').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje2').style.display='none';
  }

  if (precioUnitario=="") {

    document.getElementById('mensaje3').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje3').style.display='none';
  }

  if (importe=="") {

    document.getElementById('mensaje4').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje4').style.display='none';
  }

}
