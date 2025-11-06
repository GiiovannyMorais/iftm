window.addEventListener("DOMContentLoaded" , function(){

let valor = parseInt(prompt("Informe um Valor ..."));

let msg = document.getElementById("msg");


msg.innerHTML = `Por favor,  aguarde ${valor} segundos para carregar a página do Google`

let intervalo = setInterval(function() {
// cria um intervalo a cada 1 segundo
    valor--;
    msg.innerHTML = `Por favor,  aguarde ${valor} segundos para carregar a página do Google`


    if( valor == 0){
        window.location.href = "https://www.google.com";
    }

},1000 )// aqui é 1 segundo);

});