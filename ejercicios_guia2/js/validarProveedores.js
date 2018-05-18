function validarProveedores(){

  var codigo = document.getElementById('codigo').value;
  var nit = document.getElementById('nit').value;
  var proveedor = document.getElementById('proveedor').value;
  var direccion = document.getElementById('direccion').value;

  if (codigo=="") {

    document.getElementById('mensaje1').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje1').style.display='none';
  }

  if (nit=="") {

    document.getElementById('mensaje2').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje2').style.display='none';
  }

  if (proveedor=="") {

    document.getElementById('mensaje3').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje3').style.display='none';
  }

  if (direccion=="") {

    document.getElementById('mensaje4').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje4').style.display='none';
  }

}
