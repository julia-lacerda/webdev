var a1 = window.prompt("Digite a primeira nota: ");
var a2 = window.prompt("Digite a segunda nota: ");

a1  = parseFloat(a1);
a2 = parseFloat(a2);
var media = (a1 + a2)/2;

if(media >= 7){
    alert("Aprovado!");
}else if(media > 5 && media < 7){
    alert("Exame");
}else{
    alert("Reprovado!");
}

