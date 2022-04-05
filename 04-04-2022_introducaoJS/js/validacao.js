var validar = function () {
    elementoNome = document.getElementById("nome");
    if (elementoNome.value == "") {
        alert("Nome vazio");
        return false;
    }
    return true;
};
