window.addEventListener("DOMContentLoaded", function () {

    const jogador1 = document.getElementById("jogador1");
    const jogador2 = document.getElementById("jogador2");

    const nomeJogador1 = localStorage.getItem("jogador1");
    const nomeJogador2 = localStorage.getItem("jogador2");

    jogador1.innerHTML = `<p>Velhinha ${nomeJogador1}</p>`;
    jogador2.innerHTML = `<p>Velhinha ${nomeJogador2}</p>`;

    const casa = document.querySelectorAll(".casa");
    const status = document.getElementById("status");
    const reset = document.getElementById("reset");

    const imgVitoria = document.getElementById("imgVitoria");
    const imgVitoria2 = document.getElementById("imgVitoria2");

    let clique = document.getElementById("click");

    let musica1 = document.getElementById("musica1");
    let SongVitoria = document.getElementById("SongVitoria");
    const start = document.getElementById("btnStart");
    start.addEventListener("click" , () => {
        if (musica1.paused) {
            musica1.play();
        } else {
            musica1.pause();
        }
    });



   

    let tabuleiro = ["", "", "", "", "", "", "", "", ""];

    let jogadorAtual = "X";

    let jogadorX = nomeJogador1;
    let jogadorO = nomeJogador2;
    let jogoAtivo = true;

    status.textContent = "Quem joga é a senhora " + jogadorX;

    
    for (let i = 0; i < casa.length; i++) {
        casa[i].onclick = function () {
            jogar(i);
        };
    }

    reset.onclick = function () {
    clique.play();
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    
    casa.forEach(c => c.textContent = "");

    jogadorAtual = "X";
    jogoAtivo = true;

    status.textContent = "Quem joga é a senhora " + jogadorX;
    };

    function jogar(i){
        clique.play();
        if (!jogoAtivo) return;
        if (tabuleiro[i] !== "") return;


        tabuleiro[i] = jogadorAtual;
        casa[i].textContent = jogadorAtual;

        if(verificarVitoria()) {
          if (jogadorAtual === "X") {
            status.textContent = jogadorX + " venceu!";
            imgVitoria.src = "img/6.png";
            imgVitoria2.src = "img/1.png";
            SongVitoria.play();

          } else {
            status.textContent = jogadorO + " venceu!";
            imgVitoria2.src = "img/4.png";
            imgVitoria.src = "img/10.png";
            SongVitoria.play();
            
          }

          jogoAtivo = false;
          return;
        }

    if(!tabuleiro.includes("")) {
        status.textContent = "Deu velha!";
        imgVitoria2.src = "img/3.png";
        imgVitoria.src = "img/11.png"
        jogadorAtivo = false;
        
        return;
    }

    if (jogadorAtual === "X") {
    jogadorAtual = "O";
    status.textContent = "Vez de " + jogadorO;
} else {
    jogadorAtual = "X";
    status.textContent = "Vez de " + jogadorX;
}
 
  
    }

    function verificarVitoria(){

        const combinacoesVitoria = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let i = 0; i < combinacoesVitoria.length; i++) {
            const [a,b,c] = combinacoesVitoria[i];

            if (
                tabuleiro[a] !== "" &&
                tabuleiro[a] === tabuleiro[b] &&
                tabuleiro[b] === tabuleiro[c]
            ) {
                return true;
            }
        }

        return false;
    }

});
