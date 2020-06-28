var columnasGlobal;

$(document).ready(function () {
    bindearBotones();
    chargeSelect();
});

function bindearBotones() {
    var botones = $("button");
    botones[0].onclick = insertarDatos;
    botones[1].onclick = () => $("tbody").empty();
    botones[2].onclick = () => cargarDatosByFiltros(null);
}

function bindearFiltros(columnas) {
    var theads = $("th");
    if (theads.length != columnas.length) {
        alert("El numero de columnas de la tabla en base de datos no coincide con el que se mostro!");
        return;
    }
    for (var i = 0; i < theads.length; i++) {
        theads[i].setAttribute("value", columnas[i]);
        theads[i].onclick = function () {
            $("tbody").empty();
            $("tbody").html("<h1>Esperando respuesta...<h1>");
            cargarDatosByFiltros(this.getAttribute("value"));
            $("select")[0].value = this.getAttribute("value");
        }
    }
}
function insertarDatos() {
    $("tbody").empty();
    $("tbody").html("<h1>Esperando respuesta...<h1>");
    $.ajax({
        type: "post",
        url: "PHP-11-BD-Lista-filtro.php",
        data: {
            "puntoEntrada": "I"
        },
        success: function (response) {
            cargarDatosByFiltros();
        }
    });
}

function makeTabla(articulos) {
    var html;
    if(articulos.length == 0)
        $("tbody").html("<h1>No se encontraron datos en la BD</h1>");
    for (var art of articulos) {
        html += '<tr><td>' + art.codigo + '</td>\
        <td>' + art.familia + '</td>\
        <td>' + art.unidad + '</td>\
        <td>' + art.descripcion + '</td>\
        <td>' + art.fecha_alta + '</td>\
        <td>' + art.stock + '</td></tr>';
    }
    $("tbody").html(html);
    var p = document.createElement("p");
    p.setAttribute("style", "float: left; margin-left:1%;");
    p.textContent = articulos.length + " articulos";
    $("footer").children("p").remove();
    $("footer").prepend(p.outerHTML);

}

function chargeSelect() {
    $("tbody").empty();
    $("tbody").html("<h1>Cargando select \"orden\"...<h1>");
    $.ajax({
        type: "post",
        url: "PHP-11-BD-Lista-filtro.php",
        data: {
            "puntoEntrada": "S"
        },
        success: function (response) {
            var jsonColumnas = JSON.parse(response);
            makeSelectOfColumns(jsonColumnas);
            bindearFiltros(jsonColumnas);
            columnasGlobal = jsonColumnas;
            $("tbody").empty();
        }
    });
}

function makeSelectOfColumns(columnas) {
    var select = $("select");
    var html = "<option value = '' disabled hidden selected>Seleccionar orden...</option>";
    for (var c of columnas)
        html += "<option value='" + c + "'>" + c + "</option>";
    select.html(html);
}



function cargarDatosByFiltros(columnaOrdena) {
    $("tbody").empty();
    $("tbody").html("<h1>Esperando respuesta...<h1>");

    if (!columnaOrdena) {
        var select = $("select");
        if(select.val())
            columnaOrdena = select.val();
    }

    var inputs = $("input");
    var strings = [];
    var columnas = [];
    for (var i = 0; i < inputs.length; i++)
        if (inputs[i].value) {
            strings.push(inputs[i].value);
            columnas.push(columnasGlobal[i]);
        }

    $.ajax({
        type: "POST",
        url: "PHP-11-BD-Lista-filtro.php",
        data: {
            "puntoEntrada": "C",
            "columnasStr": columnas,
            "columna": columnaOrdena,
            "strings": strings
        },
        success: function (response) {
            var json = JSON.parse(response);
            makeTabla(json);
        }
    });
}