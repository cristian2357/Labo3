var acumulador = 0;

function bindearBotones() {
    var botonesNumeros = document.getElementsByClassName("botonera-numeros")[0].getElementsByTagName("button");
    for (var i = 0; i < botonesNumeros.length; i++)
        botonesNumeros[i].onclick = concatenarNumero;

    var botonesOperaciones = document.getElementsByClassName("botonera-acciones")[0].getElementsByTagName("button");

    botonesOperaciones[0].onclick = sumarAcumulador;
    botonesOperaciones[1].onclick = mostrarAcumulador;
    botonesOperaciones[2].onclick = borrarAcumulador;
    botonesOperaciones[3].onclick = borrarDisplay;
}

function concatenarNumero() {
    document.getElementsByTagName("input")[0].value += this.textContent;
}

function borrarDisplay() {
    document.getElementsByTagName("input")[0].value = '';
}

function sumarAcumulador() {
    var numInput = document.getElementsByTagName("input")[0].value;
    if (numInput)
        acumulador += parseInt(numInput);
    borrarDisplay();
}

function mostrarAcumulador() {
    alert(acumulador);
}

function borrarAcumulador() {
    acumulador = 0;
}