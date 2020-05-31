var vecPersonas = new Array();

function bindearBotones() {
    var botones = document.getElementsByTagName("button");

    botones[0].onclick = agregarPersona;
    botones[1].onclick = mostrarTabla;
    botones[2].onclick = ocultarTabla;
}

function agregarPersona() {
    var vecInputs = document.getElementsByTagName("input");

    vecPersonas.push({
        nombre: vecInputs[0].value,
        apellido: vecInputs[1].value,
        fechaNac: vecInputs[2].value
    });
    vecInputs[0].value='';
    vecInputs[1].value='';
    vecInputs[2].value='';
    
    mostrarTabla();
    limpiarInputs();
}

function mostrarTabla() {
    var codigoHTML = "<table><tbody>";
    for (var persona of vecPersonas) {
        codigoHTML += "<tr><td>" + persona.nombre + "</td>" +
            "<td>" + persona.apellido + "</td>" +
            "<td>" + persona.fechaNac + "</td></tr>";
    }
    codigoHTML += "</tbody></table>";
    codigoHTML += "<h2>El vector tiene " + vecPersonas.length + " elementos de largo</h2>";

    document.getElementById("tabla").innerHTML = codigoHTML;
    document.getElementById("tabla").style.display = "block";
    document.getElementById("tabla").children.getElementsByTagName("button");
}

function ocultarTabla() {
    document.getElementById("tabla").style.display = "none";
}

