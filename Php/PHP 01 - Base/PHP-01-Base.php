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
    <h3>Todo lo escrito fuera de las marcas php es entregado en la respuesta http sin pasar
        por el procesador PHP</h3>
        <?php
        echo "<h3>Todo texto y/o html <span style='color:blue'>entregado por el procesador PHP</span> cuando usamos la
        sentencia echo</h3>";

        $nombreVariable = 30;
        $variableBooleanaVerdadera = true;
        $variableBooleanaFalsa = false;

        echo "<h3>\$nombreVariable = " . $nombreVariable . "</h3>";


        echo "<h3>Variabole tipo booleano (verdadero) " . "<span style='color:blue'>" . "\$variableBooleanaVerdadera = </span>" .
        $variableBooleanaVerdadera . "</h3>";
        echo "<h3>Variabole tipo booleano (falso) " . "<span style='color:blue'>" . "\$variableBooleanaFalsa = </span>" .
        $variableBooleanaFalsa . "</h3>";
        define("CONSTANTE", "valorConstante");

        echo "<h3><span style='color: blue;'>CONSTANTE: </span> " . CONSTANTE . '</h3>';

        echo "<h3>Tipo de \CONSTANTE : " . gettype(CONSTANTE) . '<h3>';

        echo "<h3>Arreglos:</h3>";

        $aPalabras = ["hola", "hello"];



        array_push($aPalabras, "ciao");
        array_push($aPalabras, "bonjour");

        echo "<h3>\$aPalabras[0] :" . $aPalabras[0] . "</h3>";
        echo "<h3>\$aPalabras[1] :" . $aPalabras[1] . "</h3>";

        echo "<h3>Todos los elementos originales y agregados</h3>";

        foreach ($aPalabras as $palabra)
            echo '<h3>' . $palabra . "</h3>";

        $grupoPalabras = [];
        array_push($grupoPalabras, $aPalabras);
        $masPalabras = ["hola 1", "hello 1", "ciao 1", "bonjour 1"];
        array_push($grupoPalabras, $masPalabras);
        $masPalabras = ["hola 2", "hello 2", "ciao 2", "bonjour 2"];
        array_push($grupoPalabras, $masPalabras);

        echo '<table> <thead> <tr> <th>Español</th><th>Ingles</th><th>Italiano</th><th>Frances</th> </tr> </thead>';

        echo '<tbody>';

        foreach ($grupoPalabras as $vecPalabras)
        {
            echo '<tr>';
            foreach ($vecPalabras as $palabra)
                echo '<td>' . $palabra . '</td>';
            echo '</tr>';
        }

        echo '</tbody></table>';



        echo '<h3> cantidad de elementos diccionario: ' . sizeof($grupoPalabras) . '</h3>';

        echo '<h2>Variables de tipo arreglo asociativo<h2>';

        $producto = ["codigo" => "203", "nombre" => "lavadora", "cantidad" => "12"];

        echo '<h3>Codigo: ' . $producto["codigo"];
        echo '<h3>Nombre: ' . $producto["nombre"];
        echo '<h3>Cantidad: ' . $producto["cantidad"];

        $x = 4;
        $y = 3;
        $z = ($x + $y);
        $m = $x * $y;
        $d = $x / $y;

        echo '<h3>La variable x tiene un valor de ' . $x;
        echo '<h3>La variable y tiene un valor de ' . $y;
        echo '<h3>La variable x tiene un tipo de ' . gettype($x);
        echo '<h3>La variable y tiene un tipo de ' . gettype($y);

        echo '<h3>La variable z tiene un valor de ' . $z;

        echo '<h3>Suma (x + y): ' . $z;
        echo '<h3>Multiplicacion (x * y): ' . $m;
        echo '<h3>Division (x / y): ' . $d;


        ?>



</body>

</html>