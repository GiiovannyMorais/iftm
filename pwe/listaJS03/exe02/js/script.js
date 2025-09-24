bnt =document.getElementById("bntNome");
txtExibir = document.getElementById("txtNome");


txtExibir.addEventListener("input", txtNome);

function txtNome() {
    txtExibir.value = txtExibir.value.toUpperCase();
    alert(txtExibir.value)
}
