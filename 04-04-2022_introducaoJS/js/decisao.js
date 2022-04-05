var oNumero = window.prompt("Digite um número qualquer");

if (!isNaN(oNumero)){
    alert("Seu número é a raiz quadrada de " + oNumero * oNumero);
}else{
    alert("Esse número é inválido!")
}