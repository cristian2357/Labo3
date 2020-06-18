function bindearBotones() {
    var botones = $("button");

    botones[0].onclick = mostrarModal;
    botones[1].onclick = ocultarModal;
    botones[2].onclick = enviar;

    ocultarModal();
}

function mostrarModal() {
    $(".content").css("pointer-events", "none");
    $(".content").css("opacity", "0.3");
    $(".modal").show();
}

function ocultarModal() {
    $(".content").css("pointer-events", "auto");
    $(".content").css("opacity", "1");
    $(".modal").hide();
}

function enviar() {

    if (!confirm("Esta seguro de enviar los datos?"))
        return;

    var jsonValues = {};
    for (var input of document.getElementsByTagName("input"))
        jsonValues[input.getAttribute("name")] = input.value;

    $(".div-inputs button").nextAll().remove();
    $(".div-inputs").append("<h1>Esperando respuesta...<h1>");

    $.ajax({
        type: "post",
        url: "PHP-08-Form-to-JSON.php",
        data: {
            datos: jsonValues
        },
        success: function (response) {
            document.open();
            document.write(response);
            document.close();
            mostrarModal();
        }
    });


}