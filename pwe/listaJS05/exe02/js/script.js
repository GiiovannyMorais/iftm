votosCand = [0, 0, 0, 0];


 cand1 = document.getElementById("cand1");
 cand2 = document.getElementById("cand2");
 cand3 = document.getElementById("cand3");
 cand4 = document.getElementById("cand4");

 voto1 = document.getElementById("voto1");
 voto2 = document.getElementById("voto2");
 voto3 = document.getElementById("voto3");
 voto4 = document.getElementById("voto4");


function atualizarVotos() {
    voto1.textContent = votosCand[0];
    voto2.textContent = votosCand[1];
    voto3.textContent = votosCand[2];
    voto4.textContent = votosCand[3];
}


cand1.addEventListener("click", () => {
    votosCand[0]++;
    atualizarVotos();
});
cand2.addEventListener("click", () => {
    votosCand[1]++;
    atualizarVotos();
});
cand3.addEventListener("click", () => {
    votosCand[2]++;
    atualizarVotos();
});
cand4.addEventListener("click", () => {
    votosCand[3]++;
    atualizarVotos();
});


atualizarVotos();
