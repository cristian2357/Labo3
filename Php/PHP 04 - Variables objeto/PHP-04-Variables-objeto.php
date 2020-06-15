<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>Variables de tipo objeto en PHP</h2>
        <?php
        $pedido = new stdClass();
        $pedido->codigo = "001";
        $pedido->precio = 100;
        $pedido->descripcion = "auricular z90x";
        $pedido->cantidad = 2;
        ?>
        <h2 style="color:blue">$pedido</h2>
    
        <p>Codigo de articulo: <?=$pedido->codigo?></p>
        <p>Descripcion: <?=$pedido->descripcion?></p>
        <p>Precio: $<?=$pedido->precio?></p>
        <p>Cantidad: <?=$pedido->cantidad?></p>

        <h2>Tipo de objeto <span style="color:blue">$pedido</span>: <?=gettype($pedido)?> </h2>
        <h2>Arreglo de pedidos:</h2>
        <h2 style="color:blue">$vecPedidos</h2>
        <?php
        $vecPedidos = [];
        array_push($vecPedidos,$pedido);
        array_push($vecPedidos,$pedido);
        echo "<p>".$vecPedidos[0]->codigo." ".$vecPedidos[0]->descripcion." $".$vecPedidos[0]->precio." ".$vecPedidos[0]->cantidad."</p>";
        echo "<p>".$vecPedidos[1]->codigo." ".$vecPedidos[1]->descripcion." $".$vecPedidos[1]->precio." ".$vecPedidos[1]->cantidad."</p>";
        ?>
        <h2>Cantidad de pedidos: <?=sizeof($vecPedidos)?></h2>
        <?php
            $jsonPedidos = json_encode($vecPedidos);
        ?>
        <h2>Produccion de un json con pedidos:</h2>
        <p><?=$jsonPedidos?></p>
    </body>
</html>
