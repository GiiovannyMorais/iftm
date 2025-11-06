window.addEventListener("DOMContentLoaded", function(){

 btn = document.getElementById("btnClique");
texto01 = document.getElementById("texto01");
texto02 = document.getElementById("texto02");

function transferir() {
    
    let texto = texto01.value;
    texto01.value = "";
    texto02.value = texto;
}

btn.addEventListener("click", function() {
    // aqui eu to chamando a função transferir para ficar por 2 segundos 
  setTimeout( transferir, 2000);



});


}); 