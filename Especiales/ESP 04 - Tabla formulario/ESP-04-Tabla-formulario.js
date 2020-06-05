function accionesIniciales(){
    ocultarModal();
    bindearBotones();
    setearSelect();
}

function bindearBotones() {
    var botones = $("button");

    botones[0].onclick = limpiarDatos;
    botones[1].onclick = cargarDatos;
    botones[2].onclick = mostrarModal;
    botones[3].onclick = ocultarModal;
}

function setearSelect(){
    var articulos = JSON.parse(jsonFamiliaArticulos).articulos;
    var select = document.querySelector("select");
    for (var a of articulos) {
        var option = document.createElement("option");
        option.innerHTML = a;
        select.appendChild(option);
    }
    document.querySelector("form").method = "get";
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

function mostrarModal() {
    $(".content").css("pointer-events","none");
    $(".content").css("opacity","0.3");
    $(".modal").show();
}

function ocultarModal(){
    $(".content").css("pointer-events","auto");
    $(".content").css("opacity","1");
    $(".modal").hide();
}