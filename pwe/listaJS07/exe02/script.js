window.addEventListener("DOMContentLoaded", function(){


 btn = document.getElementById("btnClique");
 tempo = this.document.getElementById("tempo");
texto01 = document.getElementById("texto01");
texto02 = document.getElementById("texto02");

function transferir() {
    let texto = texto01.value;
    texto01.value = "";
    texto02.value = texto;
}

btn.addEventListener("click", function() {
    segundos = parseInt(tempo.value) * 1000; 
    // parseInt para converter a string em numero

    setTimeout(transferir, segundos);



});


}); 