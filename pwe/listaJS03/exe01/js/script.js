bnt =document.getElementById("bntNome");
txtExibir = document.getElementById("txtNome");

bnt.addEventListener("click", bntNomes);

function bntNomes() {
    alert(txtExibir.value)
}