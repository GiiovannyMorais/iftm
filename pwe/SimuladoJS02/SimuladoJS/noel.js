window.addEventListener("DOMContentLoaded" , function(){

noelVezes = document.getElementById("noelVezes");
btnFalas = document.getElementById("btnFalas");
mostrarFalas = document.getElementById("mostrarFalas");


btnFalas.addEventListener("click" , function(){

let falas = parseInt(noelVezes.value);
let paragrafos

    if(isNaN(falas)) alert("Número de falas inválido.");

    for (i=0; i<falas; i++){
        paragrafos = document.createElement("p");
        paragrafos.textContent = "Ho Ho Ho Feliz Natal!";
        mostrarFalas.appendChild(paragrafos);
    }

    
});


});