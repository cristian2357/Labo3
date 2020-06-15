<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <form>
            <p>Nombre:</p>
            <input type="text" name="nombre">
            <p>Apellido:</p>
            <input type="text" name="apellido">
            <input type="submit">
        </form>
    </body>
    <script>
        var form = document.getElementsByTagName("form")[0];
        form.method = "post";
        form.action = "respuesta.php";
    </script>
</html>