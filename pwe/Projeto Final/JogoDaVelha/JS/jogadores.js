window.addEventListener('DOMContentLoaded' , function(){
  
     
usuario1 = document.getElementById("urs1");
usuario2 = document.getElementById("urs2");

btnJogar = document.getElementById("btnJogar");

let clique = document.getElementById("click");

let musica1 = document.getElementById("musica1");
const start = document.getElementById("btnStart");
    start.addEventListener("click" , () => {
        if (musica1.paused) {
            musica1.play();
        } else {
            musica1.pause();
        }
    });


btnJogar.addEventListener("click" , entrarJogo);

function entrarJogo() {
    
    clique.play();
    localStorage.setItem("jogador1", usuario1.value);
    localStorage.setItem("jogador2", usuario2.value);

    
    
    if(usuario1.value === "" || usuario2.value === ""){
        Swal.fire({
            icon: "warning",
            title: "Campos Vazios",
            text: "Preencha os nomes dos jogadores!"
            });
            return;
    }

    
 window.location.href = "jogo.html";

    
};


});