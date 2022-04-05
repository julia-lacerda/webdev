itens_menu = ["Home", "Contatos", "Sobre"];

document.write("<ul>");
    for (var item of itens_menu){
        document.write("<li>" + item + "</li>");
    }

document.write("</ul>");