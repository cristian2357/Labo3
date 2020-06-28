<?php

include "PHP-11-BD-Lista-filtro.ini";
$insertar;
$obtener;
$getColumnas;

if (isset($_POST["puntoEntrada"]))
    if ($_POST["puntoEntrada"] == 'I')
        $insertar = true;
    else if ($_POST["puntoEntrada"] == 'S')
        $getColumnas = true;
    else if ($_POST["puntoEntrada"] == 'C')
        $obtener = true;


$mysqli = new mysqli(SERVER, USUARIO, PASS, BASE);

if (isset($insertar)) {
    $nroInserts = 20;
    $vecInserts = getDatosAleatorios($nroInserts);

    foreach ($vecInserts as $fila) {
        $sql = "insert into productos_tienda (codigo,familia,unidad,descripcion,fecha_alta,stock) 
        values (null,' " . $fila->familia . " ' , ' " . $fila->unidad . " ' , ' " . $fila->descripcion . " ' , " .
            "STR_TO_DATE('" . $fila->fechaAlta . "','%d/%m/%Y')" .
            " , " . strval($fila->stock) . ");";
        $mysqli->query($sql);
    }
} else if (isset($obtener)) {
    sleep(0.5);
    $sql = "select * from productos_tienda ";
    if (isset($_POST['strings']) && isset($_POST['columnasStr'])) {
        $columnas = $_POST['columnasStr'];
        $strings = $_POST['strings'];
        $sql .= "where 1 = 1 ";
        if (sizeof($columnas) == sizeof($strings))
            for ($i = 0; $i < sizeof($columnas); $i++)
                $sql .= "and " . $columnas[$i] . " like lower('%" . $strings[$i] . "%') ";
    }
    if (isset($_POST['columna']) && !empty($_POST['columna']))
        $sql .= "order by " . $_POST['columna'];
    $resultado = $mysqli->query($sql);
    $vecData = [];

    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($vecData, $fila);

    echo json_encode($vecData);
} else if (isset($getColumnas)) {
    $sql = "show columns from productos_tienda";
    $resultado = $mysqli->query($sql);
    $vecColumnas = [];

    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($vecColumnas, $fila["Field"]);

    echo json_encode($vecColumnas);
}
