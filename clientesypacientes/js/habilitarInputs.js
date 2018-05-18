function habilitar(){
  var inputs = document.getElementsByClassName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled=false;
  }
}
