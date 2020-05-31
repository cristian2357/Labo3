function bindearBotones() {
    document.getElementsByTagName("button")[0].onclick = limpiarInputs;
    document.getElementsByTagName("button")[1].onclick = enviar;
    
}

function limpiarInputs() {
    var inputs = document.getElementsByTagName("input");
    inputs[0].value = '';
    inputs[1].value = '';

    if (!confirm("Esta seguro de blanquear?"))
        return;
}

function enviar(){
    if (!confirm("Esta seguro de enviar?"))
        return;

    var form = document.getElementsByTagName("form")[0];
    form.action = "./utils/Respuesta-formulario.html";
    form.submit();
}