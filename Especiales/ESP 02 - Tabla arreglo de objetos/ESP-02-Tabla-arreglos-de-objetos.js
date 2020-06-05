function bindearBotones() {
    var botones = $("button");

    botones[0].onclick = limpiarDatos;
    botones[1].onclick = cargarDatos;
}

function cargarDatos() {
    var articulos = JSON.parse(data).articulos;
    var html;
    for (var art of articulos) {
        html += '<tr><td>' + art.codArt + '</td>\
        <td>' + art.Familia + '</td>\
        <td>' + art.unidad + '</td>\
        <td>' + art.descripcion + '</td>\
        <td>' + art.fechaAlta + '</td>\
        <td>' + art.stock + '</td></tr>';
    }
    $("tbody").html(html);
}

function limpiarDatos() {
    $("tbody").empty();
}