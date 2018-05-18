function validarProductos(){

  var codigo = document.getElementById('codigo').value;
  var producto = document.getElementById('producto').value;
  var stock = document.getElementById('stock').value;
  var stockMinimo = document.getElementById('stockMinimo').value;
  var precioCompra = document.getElementById('precioCompra').value;
  var precioVenta = document.getElementById('precioVenta').value;


  if (codigo=="") {

    document.getElementById('mensaje1').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje1').style.display='none';
  }
  if (producto=="") {

    document.getElementById('mensaje2').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje2').style.display='none';
  }
  if (stock=="") {

    document.getElementById('mensaje3').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje3').style.display='none';
  }
  if (stockMinimo=="") {

    document.getElementById('mensaje4').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje4').style.display='none';
  }
  if (precioCompra=="") {

    document.getElementById('mensaje5').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje5').style.display='none';
  }
  if (precioVenta=="") {

    document.getElementById('mensaje6').style.display='block';
    return false;
  }
  else {
    document.getElementById('mensaje6').style.display='none';
  }



}
