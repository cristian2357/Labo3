<?php

include "PHP-13-Session.ini";
$insertar;
$obtener;
$getColumnas;

$mysqli = new mysqli(SERVER, USUARIO, PASS, BASE);

if (isset($_POST["puntoEntrada"])) {
    if ($_POST["puntoEntrada"] == 'I')
        $insertar = true;
    else if ($_POST["puntoEntrada"] == 'S')
        $getColumnas = true;
    else if ($_POST["puntoEntrada"] == 'C')
        $obtener = true;
    else if ($_POST["puntoEntrada"] == 'A')
        alta($mysqli, $_POST['data']);
    else if ($_POST["puntoEntrada"] == 'B')
        baja($mysqli, $_POST['data']);
    else if ($_POST["puntoEntrada"] == 'M')
        modificacion($mysqli, $_POST['data']);
    else if ($_POST["puntoEntrada"] == 'CSA')
        obtenerValoresParaSelectFormAlta($mysqli);
}

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
        $vecData[$fila['codigo']] = $fila;              // diccionario indexado por codigo articulos

    echo json_encode($vecData);
} else if (isset($getColumnas)) {
    $sql = "show columns from productos_tienda";
    $resultado = $mysqli->query($sql);
    $vecColumnas = [];

    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($vecColumnas, $fila["Field"]);

    echo json_encode($vecColumnas);
}

$mysqli->close();

function obtenerValoresParaSelectFormAlta($mysqli)
{
    $sql = "select distinct familia from productos_tienda";
    $resultado = $mysqli->query($sql);
    $familias = [];
    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($familias, $fila['familia']);

    $sql = "select distinct unidad from productos_tienda";
    $resultado = $mysqli->query($sql);
    $unidades = [];
    while ($fila = mysqli_fetch_assoc($resultado))
        array_push($unidades, $fila['unidad']);

    $vecDatos = ["familias" => $familias, "unidades" => $unidades];

    enviarDatos($mysqli, $vecDatos);
}

function alta($mysqli, $objetoAlta)
{
    $sql = "insert into productos_tienda (familia,unidad,descripcion,fecha_alta,stock) values ('" .
        $objetoAlta['familia'] . "', '" . $objetoAlta['unidad'] . "', '" . $objetoAlta['descripcion'] .
        "' ," . "STR_TO_DATE('" . $objetoAlta['fecha_alta'] . "','%Y-%m-%d')" . ", '" . $objetoAlta['stock'] . "')";

    $resultado = $mysqli->query($sql);    
}

function modificacion($mysqli, $objetoMod)
{
    $sql = "update productos_tienda set ";

    $sql .= "familia = '" . $objetoMod['familia'] . "'";
    $sql .= ", unidad = '" . $objetoMod['unidad'] . "'";
    $sql .= ", descripcion = '" . $objetoMod['descripcion'] . "'";
    $sql .= ", fecha_alta = " . "STR_TO_DATE('" . $objetoMod['fecha_alta'] . "','%Y-%m-%d')";
    $sql .= ", stock = " . $objetoMod['stock'];

    $sql .= " where codigo = '" . $_POST['codigo'] . "'";

    $mysqli->query($sql);
}

function baja($mysqli, $objeto)
{
    $codigo = $objeto['codigo'];
    $sql = "delete from productos_tienda where codigo = " . $codigo;
    $mysqli->query($sql);
}

function enviarDatos($mysqli, $datos)
{

    echo json_encode($datos);
}
