window.addEventListener("DOMContentLoaded", function(){

let txtTexto = document.getElementById("txtTexto");
let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function(){

  let valor = txtTexto.value; // vai pegar o texto digitado

  localStorage.setItem("infoUser", valor); //salva no localStore
  

});






});