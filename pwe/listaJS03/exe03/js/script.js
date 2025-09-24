exibe = document.getElementById("txtExibir");
bnt = document.getElementById("bntMostre");
dobrar = document.getElementById("txtDobro");

bnt.addEventListener("click",valorDobrar);

function valorDobrar() {
    if (exibe.value.trim() == "")
        alert("O campo está em branco");
    else if (isNaN(exibe.value))
        alert("O valor digitado não é um número");
    else
        dobrar.value = (exibe.value * 2);
}