function establecerAcciones() {
    var botones = document.getElementsByTagName("button");
    botones[0].onclick = function () {
        document.getElementsByTagName("form")[0].reset()
    };
    botones[1].onclick = haciaAlta;
    botones[2].onclick = haciaMod;
    botones[3].onclick = haciaBaja;

    var inputs = document.getElementsByTagName("input");
    for (input of inputs)
        input.onkeyup = verificarBotones;
}

function haciaAlta() {
    var action = "./utils/Alta.html";
    enviarFormulario(action);
}

function haciaMod() {
    var action = "./utils/Modificacion.html";
    enviarFormulario(action);
}

function haciaBaja() {
   var action = "./utils/Baja.html";
    enviarFormulario(action);
}

function verificarBotones() {
    var botones = document.getElementsByTagName("button");
    var respuesta = checkInputs();
    if (respuesta.valido)
        for (var boton of botones)
            boton.disabled = false;
    else if (!respuesta.valido)
        for (var boton of botones)
            boton.disabled = true;
    botones[0].disabled = respuesta.vacio;
}

function checkInputs() {
    var inputs = document.getElementsByTagName("input");
    var respuesta = {
        vacio: true,
        valido: true
    };
    for (var input of inputs) {
        if (input.checkValidity())
            respuesta.vacio = false;
        else
            respuesta.valido = false;
    }
    return respuesta;
}

function enviarFormulario(accion){
    var form = document.getElementsByTagName("form")[0];
    form.action = accion;
    form.setAttribute("method","get");
    form.submit();
}