var columnasGlobal;
var articulosGlobal;

$(document).ready(function () {
    bindearBotones();
    chargeSelectColumnas();
    chargeSelectsAlta();
    ocultarModal("modal");
});

function bindearBotones() {
    var botones = $("button");
    botones[0].onclick = insertarDatos;
    botones[1].onclick = () => $("tbody").empty();
    botones[2].onclick = () => cargarDatosByFiltros(null);
    botones[3].onclick = () => mostrarModal("alta");
    $(".modal header button").click(() => ocultarModal("modal"));
    $(".btn-insertar").click(altaDatos);
    $(".btn-baja").click(function () {
        bajaFila(this.getAttribute("idArticulo"));
    });
    $(".btn-mod").click(function () {
        parseDetalleModificarFila(this.getAttribute("idArticulo"));
    })
    $(".btn-modificar").click(function () {
        updateFila(this.value);
    });

}

function bindearFiltros(columnas) {
    var theads = $("th");
    if (theads.length - 2 != columnas.length) {
        alert("El numero de columnas de la tabla en base de datos no coincide con el que se mostro!");
        return;
    }
    for (var i = 0; i < theads.length - 2; i++) {
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
        url: "PHP-12-ABM.php",
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
    articulosGlobal = articulos;
    if (articulos.length == 0)
        $("tbody").html("<h1>No se encontraron datos en la BD</h1>");
    var allCodigos = Object.keys(articulos);
    for (var codArt of allCodigos) {
        html += '<tr><td>' + articulos[codArt].codigo + '</td>\
        <td>' + articulos[codArt].familia + '</td>\
        <td>' + articulos[codArt].unidad + '</td>\
        <td>' + articulos[codArt].descripcion + '</td>\
        <td>' + articulos[codArt].fecha_alta + '</td>\
        <td>' + articulos[codArt].stock + '</td>\
        <td><button class="btn-mod" idArticulo=' + articulos[codArt].codigo + '>Mod</button>\
        <td><button class="btn-baja" idArticulo =' + articulos[codArt].codigo + '>Baja</button>\
        </tr>';
    }
    $("tbody").html(html);
    var p = document.createElement("p");
    p.setAttribute("style", "float: left; margin-left:1%;");
    p.textContent = allCodigos.length + " articulos";
    $("footer").children("p").remove();
    $("footer").prepend(p.outerHTML);
    bindearBotones();

}

function chargeSelectColumnas() {
    $("tbody").empty();
    $("tbody").html("<h1>Cargando select \"orden\"...<h1>");
    $.ajax({
        type: "post",
        url: "PHP-12-ABM.php",
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
    var select = $("#select-columnas");
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
        if (select.val())
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
        url: "PHP-12-ABM.php",
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

function mostrarModal(clase) {
    $(".content").css("pointer-events", "none");
    $(".content").css("opacity", "0.3");
    $(".modal." + clase).show();
}

function ocultarModal(clase) {
    $(".content").css("pointer-events", "auto");
    $(".content").css("opacity", "1");
    $(".modal." + clase).hide();
}

function chargeSelectsAlta() {
    $.ajax({
        type: "post",
        url: "PHP-12-ABM.php",
        data: {
            puntoEntrada: "CSA"
        },
        success: function (response) {
            parseSelectsAlta(JSON.parse(response));
        }
    });
}

function parseSelectsAlta(data) {

    var familias = data.familias;
    var unidades = data.unidades;

    var selUnidades = $("select[name='unidad']");

    var html = "";
    for (var u of unidades)
        html += "<option value ='" + u + "'>" + u + '</option>';
    selUnidades.html(html);

    var selFamilia = $("select[name='familia']");
    html = "";
    for (var f of familias)
        html += "<option value ='" + f + "'>" + f + '</option>';
    selFamilia.html(html);
}

function altaDatos() {
    var data = $(".alta form").serializeArray();
    var datos = {};

    if (!$(".modal.alta form")[0].checkValidity())
        return;

    for (var d of data)
        datos[d.name] = d.value;

    $.ajax({
        type: "POST",
        url: "PHP-12-ABM.php",
        data: {
            puntoEntrada: "A",
            "data": datos
        },
        success: function (response) {

        }
    });
}

function bajaFila(id) {
    $.ajax({
        type: "post",
        url: "PHP-12-ABM.php",
        data: {
            puntoEntrada: "B",
            data: {
                codigo: id
            }
        },
        success: function (response) {
            cargarDatosByFiltros();
        }
    });
}

function parseDetalleModificarFila(id) {

    var articulo = articulosGlobal[id];

    var selUnidades = $(".mod select[name='unidad']");
    var selFamilia = $(".mod select[name='familia']");
    var descripcion = $(".mod input[name='descripcion']");
    var fechaAlta = $(".mod input[name='fecha_alta']");
    var stock = $(".mod input[name='stock']");

    selUnidades.val(articulo.unidad);
    selFamilia.val(articulo.familia);
    descripcion.val(articulo.descripcion);
    fechaAlta.val(articulo.fecha_alta);
    stock.val(articulo.stock);

    $(".btn-modificar").val(id);
    mostrarModal("mod");
}

function updateFila(id) {
    var data = $(".mod form").serializeArray();
    var datos = {};

    if (!$(".modal.mod form")[0].checkValidity())
        return;

    for (var d of data)
        datos[d.name] = d.value;

    $.ajax({
        type: "post",
        url: "PHP-12-ABM.php",
        data: {
            "puntoEntrada": "M",
            "data": datos,
            "codigo": id
        },
        dataType: "dataType",
        success: function (response) {
            ocultarModal(".mod");
            cargarDatosByFiltros();
        }
    });
}