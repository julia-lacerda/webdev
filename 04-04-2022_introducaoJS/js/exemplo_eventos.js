var alertar = function(){
    alert("Você clicou no botão!");
}

var mudarTitulo = function() {
    elementoH1 = document.getElementById("titulo");
    elementoH1.innerHTML = "Você está com o mouse em cima do botão"
}

var tituloNormal = function(){
    elementoH1.innerHTML = "Mouse fora";
}