$(document).ready(bindearBotones);

function bindearBotones() {
    var flecha = document.querySelector("#flecha-baja-calidad");
    flecha.onclick = enviarAjax;

}

function enviarAjax() {
    $(".content > :nth-child(3)").html("<h1>Esperando la respuesta...</h1>");
    $(".content > :nth-child(4)").html("<h1>Estado del requerimiento:</h1>");
    $.ajax({
        type: "post",
        url: "PHP-07-Ajax.php",
        data: {
            dato: document.querySelector("input").value,
        },
        success: function (response) {
            document.open();
            document.write(response);
            document.close();
        }
    });

}