<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <p>Esta es el texto sin encriptar:</p>
        <p><?=$_POST["clave"]?></p>
        <p>Clave encriptada en MD5</p>
        <p><?=md5($_POST["clave"])?></p>
        <p>Clave encriptada en SHA1</p>
        <p><?=sha1($_POST["clave"])?></p>
    </body>
</html>