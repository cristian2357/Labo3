<?php
function verificarSesion()
{
    if (!isset($_SESSION['usuario']) || !isset($_SESSION['clave'])) {
        header("location:PHP-13-Session-login.html");
        exit();
    }
}

function autenticacion()
{
    // si se autentica con un user/password de la DB comienza la session
}
