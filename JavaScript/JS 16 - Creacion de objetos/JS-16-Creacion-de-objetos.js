function bindearBotones() {
    botones = document.getElementsByTagName("button");
    limpiarElementos(); // Porque se crea un nodo de texto vacio al iniciar HTML y arruina el contador
    botones[0].onclick = crearElemento;
    botones[1].onclick = limpiarElementos;
    botones[2].onclick = mostrarInfo;
}

function crearElemento() {
    var contenedor = document.getElementById("contenedor");
    
    var numElementos = contenedor.childNodes.length;

    var nuevoDiv = document.createElement("div");
    nuevoDiv.setAttribute("class","elemento-creado");
    var codeHTML = "<p>Elemento creado: " + (numElementos+1) + "</p>";
    nuevoDiv.innerHTML = codeHTML;
    contenedor.appendChild(nuevoDiv);
}

function limpiarElementos(){
    document.getElementById("contenedor").textContent = '';
}

function mostrarInfo(){
    var contenedor = document.getElementById("contenedor");
    alert("Indice " + contenedor.childElementCount + " Inner HTML: " + contenedor.lastChild.innerHTML);
}