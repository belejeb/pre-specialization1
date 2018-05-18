function iniciar() {
    document.getElementById("informacion").addEventListener("invalid", validacion, true);
    document.getElementById("informacion").addEventListener("input", controlar, false);
}

function controlar(e) {
    var elemento = e.target;
    if (elemento.validity.valid) {
        elemento.classList.remove('css_error_input');
        elemento.classList.add('css_ok_input');
    } else {
        elemento.classList.add('css_error_input')
    }
}

function validacion(e) {
    var elemento = e.target;
    elemento.classList.add('css_error_input')
}

function enviar() {
    var valido_form = document.getElementById("informacion").checkValidity();
    if (valido_form) {
        document.getElementById("informacion").submit();
    } else {
        alert("ERROR: REVISAR FORMULARIO");
    }
  }

    window.addEventListener("load", iniciar, false);


    function deshabilitarBotones() {
        var botonNuevo = document.getElementById('nuevo');
        var botonModificar = document.getElementById('modificar');
        var botonEliminar = document.getElementById('eliminar');
        var botonGuardar = document.getElementById('guardar');
        var botonCancelar = document.getElementById('cancelar');
        var botonCargar = document.getElementById('cargar');

        botonNuevo.disabled = false;
        botonModificar.disabled = true;
        botonEliminar.disabled = true;
        botonGuardar.disabled = true;
        botonCancelar.disabled = true;
        botonCargar.disabled = false;
    }

    function nuevoOrModificar() {
        document.getElementById('nuevo').disabled = true;
        document.getElementById('modificar').disabled = true;
        document.getElementById('eliminar').disabled = true;
        document.getElementById('guardar').disabled = false;
        document.getElementById('cancelar').disabled = false;
        document.getElementById('cargar').disabled = true;
    }

    function eliminarRegistro() {
        var x = confirm("Desea eliminar el registro?");
        if (x == true) {
            alert("DATOS ELIMINADOS EXITOSAMENTE");
            location.reload(false);
            document.getElementById('informacion').reset();
        }
    }

    function disabledBotonesCargar() {
        document.getElementById('nuevo').disabled = false;
        document.getElementById('modificar').disabled = false;
        document.getElementById('eliminar').disabled = false;
        document.getElementById('guardar').disabled = true;
        document.getElementById('cancelar').disabled = true;
        document.getElementById('cargar').disabled = true;

    }

    function cargarClientes() {

        disabledBotonesCargar();

        document.getElementById('input1').value = "0001";
        document.getElementById('input2').value = "Juan";
        document.getElementById('input3').value = "Molina";
        document.getElementById('input4').value = "San Miguel";
        document.getElementById('input6').value = "ejemplo@ejemplo.com";
        document.getElementById('input7').value = "26000101";
        document.getElementById('input8').value = "70010101";

    }

    function cargarElectrodomesticos() {
        disabledBotonesCargar();

        document.getElementById('input1').value = "0001";
        document.getElementById('input2').value = "Licuadora";
        document.getElementById('input4').value = 25;
        document.getElementById('input5').value = 10;
        document.getElementById('input6').value = 20;
        document.getElementById('input7').value = 30;
        document.getElementById('input8').value = "Aparato que sirve para hacer jugos";

    }

    function cargarProveedores() {
        disabledBotonesCargar();

        document.getElementById('input1').value = "0001";
        document.getElementById('input2').value = "0614-290209-000-0";
        document.getElementById('input3').value = "Omnisport";
        document.getElementById('input4').value = "San Miguel";
        document.getElementById('input5').value = "26000000";
        document.getElementById('input6').value = "ejemplo@ejemplo.com";
        document.getElementById('input7').value = "26000001";
        document.getElementById('input8').value = "Javier Guardado";

    }

    function cargarUsuarios() {
        disabledBotonesCargar();

        document.getElementById('input1').value = "Leonel";
        document.getElementById('input2').value = "Sanchez";
        document.getElementById('input3').value = "leoSanchez";
        document.getElementById('input4').value = "ejemplo@ejemplo.es";
        document.getElementById('input5').value = "12345678";
        document.getElementById('input6').value = "12345678";
        document.getElementById('input8').value = "26010101";

    }

    function cargarVentas() {
        disabledBotonesCargar();

        document.getElementById('input1').value = 1;
        document.getElementById('input2').value = "05/05/2016";
        document.getElementById('input3').value = "26000001";
        document.getElementById('input4').value = 1;
        document.getElementById('input5').value = "0012";
        document.getElementById('input6').value = "25";
        document.getElementById('input7').value = "10";
        document.getElementById('input8').value = "250";


    }
