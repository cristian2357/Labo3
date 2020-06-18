<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="PHP-07-Ajax.css">
</head>

<body>
    <div class="content">
        <div>
            <h1>Dato de entrada: </h1>
            <form>
                <input type="text">
</form>
        </div>
        <div>
            <div>
                <span id="flecha-baja-calidad">-></span>
            </div>
        </div>
        <div>
            <?php
                if (isset($_POST['dato'])) {
                    sleep(3);
                    $clave = $_POST['dato'];
                    $html = "<h1>Respuesta:</h1>";
                    $html = $html."<h3>Clave:</h3>";
                    $html = $html."<p>".$clave."</p>";
                    $html = $html."<h3>Clave encriptada en MD5:</h3>";
                    $html = $html."<p>".md5($clave)."</p>";
                    $html = $html."<h3>Clave encriptada en SHA1:</h3>";
                    $html = $html."<p>".sha1($clave)."</p>";
                    echo $html;
                }
            ?>
        </div>
        <div>
            <h1>Estado del requerimiento:</h1>
            <?php
                if (isset($_POST['dato'])) 
                    echo '<h2>sucess</h2>';
            ?>
        </div>
    </div>
</body>
<script src="../../Especiales/jquery.js"></script>
<script src="PHP-07-Ajax.js"></script>
<script>
    bindearBotones();
</script>
<?php
    function respuesta(){

    }
?>
</html>