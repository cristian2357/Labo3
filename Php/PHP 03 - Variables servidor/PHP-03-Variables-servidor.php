<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        td,
        tr {
            border: 1px solid darkblue;
            border-collapse: collapse;
            background-color: lightcoral;
            font-size: 20px;
            font-family: Courier, "Lucida Console", monospace;
        }
    </style>
</head>

<body>
    <h2>Variables de serivdor</h2>
    <table>
        <tbody>
            <?php
            $variablesServidor = ['SERVER_ADDR', 'SERVER_PORT', 'SERVER_NAME', 'DOCUMENT_ROOT'];
            foreach ($variablesServidor as $clave)
                echo '<tr> <td>' . $clave . '</td>' . '<td>' . $_SERVER[$clave] . '</td> </tr>';
            ?>
        </tbody>
    </table>
    <h2>Variables de cliente</h2>
    <table>
        <tbody>
            <?php
            $variablesCLiente = ['REMOTE_ADDR', 'REMOTE_PORT'];
            foreach ($variablesCLiente as $clave)
                echo '<tr> <td>' . $clave . '</td>' . '<td>' . $_SERVER[$clave] . '</td> </tr>';
            ?>
        </tbody>
    </table>
    <h2>Variables de requerimiento</h2>
    <table>
        <tbody>
            <?php
            $variablesRequerimiento = ['SCRIPT_NAME', 'REQUEST_METHOD'];
            foreach ($variablesRequerimiento as $clave)
                echo '<tr> <td>' . $clave . '</td>' . '<td>' . $_SERVER[$clave] . '</td> </tr>';
            ?>
        </tbody>
    </table>
    <h2>Todas</h2>
    <table>
        <tbody>
            <?php
            foreach ($_SERVER as $clave => $valor)
                echo '<p>' . $clave . ': ' . $valor . '</p>';
            ?>
        </tbody>
    </table>
</body>

</html>