window.addEventListener("DOMContentLoaded", function(){ 

let nome = prompt("Digite seu nome completo:");

let nomeExibido = document.getElementById("nomeExibido");
    
    nomeExibido.textContent = nome;
    let tamanho = 14; 
    nomeExibido.style.fontSize = tamanho + "px";



    let intervalo = setInterval(function () {
        if (tamanho >= 40) {
            clearInterval(intervalo); 
        } else {
            tamanho += 2; 
            nomeExibido.style.fontSize = tamanho + "px";
        }
    }, 500); 



});
