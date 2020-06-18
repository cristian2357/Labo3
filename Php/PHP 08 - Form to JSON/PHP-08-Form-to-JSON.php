<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="PHP-08-Form-to-JSON.css">
</head>

<body>
    <div class="content">
        <header>

        </header>
        <div id="div-gris">
            <button>Ventana modal</button>
        </div>
        <footer>

        </footer>

    </div>
    <div class="modal">
        <header>
            <button>X</button>
        </header>
        <div class="div-inputs">
            <p>Id de usuario</p>
            <input type="number" name="id">
            <p>Login</p>
            <input type="text" name="login">
            <p>Apellidos</p>
            <input type="text" name="apellido">
            <p>Nombres</p>
            <input type="text" name="nombre">
            <p>Fecha de nacimiento</p>
            <input type="date" name="fecha">
            <button>Enviar</button>
            <?php
            if (isset($_POST['datos'])) {
                sleep(3);
                echo "<p>" . json_encode($_POST['datos']) . "</p>";
            }
            ?>
        </div>
    </div>
</body>
<script src="../../Especiales/jquery.js"></script>
<script src="PHP-08-Form-to-JSON.js"></script>
<script>
    bindearBotones();
</script>

</html>