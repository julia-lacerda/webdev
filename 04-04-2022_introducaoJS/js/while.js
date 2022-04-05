numero =  10000

document.write("<hr> While <hr>");
while(numero >= 1){
    numero /= 2;
    document.write("Dividindo por 2 temos: " + numero + "<br>");
}

document.write("<hr> Do while <hr>");

do{ //se colocarmos um numero menor que 1, o do/while irá rodar (porque a condição (o while) só roda depois da conta ser feita)
    numero /= 2;
    document.write("Dividindo por 2, temos: " + numero + "<br>");
}while(numero >= 1)