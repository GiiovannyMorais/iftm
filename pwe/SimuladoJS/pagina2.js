window.addEventListener("DOMContentLoaded", function() {

  let saida = document.getElementById("saida");
  let valor = localStorage.getItem("infoUser");

  saida.innerText = valor;

  let txtNovo = document.getElementById("txtNovo");
  let selecao = document.getElementById("selecao");
  let btnAnalisar = document.getElementById("btnAnalisar");
  let qntPalavras = document.getElementById("qntPalavras");
  let iniciadasM = document.getElementById("iniciadasM");
  let primeira = document.getElementById("primeira");
  let segunda = document.getElementById("segunda");
  let ultima = document.getElementById("ultima");
  let noelPagina = document.getElementById("noelPagina");


  btnAnalisar.addEventListener("click", menu);

  function menu() {
    let opcao = selecao.value;

    if (opcao === "nao") {


      valor = txtNovo.value; // vai pegar o texto digitado
      localStorage.setItem("infoUser", valor); //salva no localStore

    } else if (opcao == "sim"){
        saida.innerText = valor;
    } else  {
       alert("Escolha uma opção")
       return;
    }
      QuantidadePalavras(valor); // chama a função para contar
      comM(valor);
      primeiraPalav(valor);
      segundaPalav(valor);
      ultimaPalav(valor);
    
  }

 function QuantidadePalavras(texto) {
    if (!texto || texto.trim() === "") {
      alert("Nenhum texto informado!");
      return;
    }

    // remove espaços extras e divide por espaços
    let palavras = texto.trim().split(" ");
    let total = palavras.length;
    qntPalavras.innerText = total;

  }

  function comM(texto) {
    
    let palavras = texto.trim().split(" ");
    let resultado = "";

    for(let i = 0; i < palavras.length; i++) {
    let p = palavras[i].toLowerCase(); // deixa minúsculo pra comparar certo
    
    if (p.startsWith("m")) { 
      resultado += palavras[i] + " "; // adiciona ao resultado
    } 
    }
    iniciadasM.value = resultado;

  

  }

  function primeiraPalav(texto){

    let palavras = texto.trim().split(" ");
 
    if(palavras.length > 0){
    primeira.value = palavras[0];
    }
  }

  function segundaPalav(texto){

    let palavras = texto.trim().split(" ");
 
    if(palavras.length > 0){
    segunda.value = palavras[1];
    }
  }

  function ultimaPalav(texto){

    let palavras = texto.trim().split(" ");
 
    if(palavras.length > 0){
    ultima.value = palavras[palavras.length - 1];
    }
  }

noelPagina.addEventListener("click");

});
