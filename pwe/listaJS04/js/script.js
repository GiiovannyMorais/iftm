


 candidatos = [
  {nome:"Simone Tebet", partido:"MDB", imagem:"candidato4.png"},
  {nome:"Luiz Inácio Lula da Silva", partido:"PT", imagem:"candidato2.png"},
  {nome:"Ciro Gomes", partido:"PDT", imagem:"candidato3.png"},
  {nome:"Jair Bolsonaro", partido:"PL", imagem:"candidato1.png"}
];

document.getElementById("botaoGerar").addEventListener("click", gerarValores );

function gerarValores(){
 indices = [0,1,2,3];
 nroVotos = Math.round(Math.random() * 100);
 vetVotos = [nroVotos, 100 - nroVotos];
 indicesSorteados = [];


for (let i = 0; i < 2; i++) {
   indCand = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
  indicesSorteados.push(indCand);

  cand = candidatos[indCand];

  document.getElementById(`nomeCandSorteado${i+1}`).innerHTML = cand.nome;
  document.getElementById(`partCandSorteado${i+1}`).innerHTML = cand.partido;
  document.getElementById(`imgCandSorteado${i+1}`).src = `img/${cand.imagem}`;
  document.getElementById(`votosCand${i+1}`).innerHTML = vetVotos[i].toFixed(1) + '%';
}

// Decide vencedor
if (vetVotos[0] === vetVotos[1]) {
  document.getElementById("candVencedor").innerHTML = "Empate";
  document.getElementById("percVencedor").innerHTML = vetVotos[0].toFixed(1) + '%';
} else if (vetVotos[0] > vetVotos[1]) {
  document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[0]].nome;
  document.getElementById("percVencedor").innerHTML = vetVotos[0].toFixed(1) + '%';
} else {
  document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[1]].nome;
  document.getElementById("percVencedor").innerHTML = vetVotos[1].toFixed(1) + '%';
}

}





// sorteio1 = vet.splice(Math.floor(Math.random()* vet.length),1)[0]; 
// //document.getElementById("img1").src = img/${candidatos[sorteio1].imagem}; 
// //document.getElementById("candSorteado1").innerHTML = candidatos[sorteio1].nome; 
// //document.getElementById("partidoSort1").innerHTML = candidatos[sorteio1].partido; 
// //sorteio2 = vet.splice(Math.floor(Math.random()* vet.length),1)[0]; 
// //document.getElementById("img2").src = img/${candidatos[sorteio2].imagem}; 
// //document.getElementById("candSorteado2").innerHTML = candidatos[sorteio2].nome; 
// //document.getElementById("partidoSort2").innerHTML = candidatos[sorteio2].partido;