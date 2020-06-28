<?php

include "PHP-09-BD-Lista.ini";
$insertar;
$obtener;
$columnas;
$porOrden;

if (isset($_POST["puntoEntrada"]))
    if ($_POST["puntoEntrada"] == 'I')
        $insertar = true;
    else if ($_POST["puntoEntrada"] == 'G')
        $obtener = true;
    else if ($_POST["puntoEntrada"] == 'S')
        $columnas = true;
    else if ($_POST["puntoEntrada"] == 'O') {
        $obtener = true;
        $porOrden = true;
    }

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
}
if (isset($obtener)) {
    sleep(0.5);
    $sql = "select * from productos_tienda";
    if (isset($porOrden) && isset($_POST['columna']))
        $sql .= " order by " . $_POST['columna'];
    $resultado = $mysqli->query($sql);
    $vecData = [];

    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($vecData, $fila);

    echo json_encode($vecData);
}
if (isset($columnas)) {
    $sql = "show columns from productos_tienda";
    $resultado = $mysqli->query($sql);
    $vecColumnas = [];

    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($vecColumnas, $fila["Field"]);

    echo json_encode($vecColumnas);
}
