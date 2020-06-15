<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <style>
        table {
            border: 1px solid black;
        }

        tbody {
            background-color: lightblue;
        }
    </style>
</head>

<body>
    <h1>En este ejemplo se utiliza funcion include</h1>
    <?php

    ejecutar($vecDatos1, $vecDatos2);

    include("PHP-02-Includes.inc");

    echo "<h3>Aqui ya se ejecuto la funcion include. Si el .inc no existe se visualiza un warring y el script se ejecuta igualmente";

    ejecutar($vecDatos1, $vecDatos2);




    function ejecutar($vecDatos1, $vecDatos2)
    {
        echo "<h3> Las 2 variables de tipo array asociativo en el inc son:</h3>";

        $html = "<table><tbody>
            <tr><td>" . $vecDatos1['nombre'] . "</td><td>" . $vecDatos1['edad'] . "</td></tr>
            <tr><td>" . $vecDatos2['nombre'] . "</td><td>" . $vecDatos2['edad'] . "</td></tr>
            </tbody></table>";

        echo $html;
    }
    ?>
</body>

</html>