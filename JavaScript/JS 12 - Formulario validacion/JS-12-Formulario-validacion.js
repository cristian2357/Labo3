function bindearBotones() {
    var botones = document.getElementsByTagName("button");

    botones[0].onclick = enviar;
    botones[1].onclick = resetCampos;
}

function establecerValidaciones() {
    var inputs = document.getElementsByTagName("input");
    inputs[0].min = 1;
    inputs[0].max = 31;
    inputs[0].onkeyup = validarDia;
    inputs[1].min = 1;
    inputs[1].max = 12;
    inputs[1].onkeyup = validarMes;
}

function validarMes() {
    if (!this.validity.valid) {
        alert("El mes no puede ser menor que 1 o mayor que 12");
        this.value = '';
    }
}

function validarDia() {
    if (!this.validity.valid) {
        alert("El dia no puede ser menor que 1 o mayor que 31");
        this.value = '';
    }
}

function enviar() {
    var form = document.getElementsByTagName("form")[0];
    form.method = "get";
    form.action = "./utils/Respuesta-formulario.html";
    form.submit();
}

function resetCampos() {
    var form = document.getElementsByTagName("form")[0];
    form.reset();
}

function verificar() {
    var inputs = document.getElementsByTagName("input");

}