function bindearBotones() {
    var vecBotones = document.getElementsByTagName("button");

    vecBotones[0].onclick = sumar;
    vecBotones[1].onclick = promedio;
    vecBotones[2].onclick = mayor;
}

function sumar() {
    var vecInputs = document.getElementsByTagName("input");
    var acumulador = 0;
    for (var i = 0; i < vecInputs.length - 1; i++)
        if (vecInputs[i].value)
            acumulador += parseInt(vecInputs[i].value);

    document.getElementsByTagName("input")[3].value = acumulador;
}

function promedio() {
    var vecInputs = document.getElementsByTagName("input");
    var acumulador = 0;
    for (var i = 0; i < vecInputs.length - 1; i++)
        if (vecInputs[i].value)
            acumulador += parseInt(vecInputs[i].value);
    document.getElementsByTagName("input")[3].value = acumulador / 3;
}

function mayor() {
    var vecInputs = document.getElementsByTagName("input");
    var mayor = Number.MIN_VALUE;
    for (var i = 0; i < vecInputs.length - 1; i++)
        if (vecInputs[i].value && parseInt(vecInputs[i].value) > mayor)
            mayor = parseInt(vecInputs[i].value);
    document.getElementsByTagName("input")[3].value = mayor;
}