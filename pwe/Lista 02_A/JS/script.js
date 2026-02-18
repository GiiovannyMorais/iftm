window.addEventListener("DOMContentLoaded", function () {
    const resultado = document.getElementById("resultado");
    const resulIdade = document.getElementById("resulIdade");
    const resulValor = document.getElementById("resulValor");
    const resulMedia = document.getElementById("resulMedia");
    let html = "";

    var vet = [10, 20, 30, 40, 50];

    //a) A soma das idades
    const soma = vet.reduce((elementos, indice) => elementos + indice, 0);
    html += `<p>Soma: ${soma}</p>`;

    //b) A média aritmética simples das idades
    const media = vet.reduce((elementos, indice) => elementos + indice, 0) / vet.length;
    html += `<p>Média: ${media}</p>`;

    //c) A maior idade
    let maior = vet[0];
    vet.forEach(elementos => {
        if (maior < elementos) {
            maior = elementos;
        }
    });
    html += `<p>A Maior das Idades: ${maior}</p>`;

    //d) As idades ímpares
    var impares = vet.filter(elementos => elementos % 2 !== 0);
    html += `<p>Idades Ímpares : ${impares}</p>`;

    //var vet = [10, 20, 30, 40, 50];

    //e) Verificar se todos são maiores de idade (idade >= 18); Retorno: true ou false
    var MaiorIdade = vet.every(elementos => elementos >= 18);
    html += `<p>Todos são maiores de idade: ${MaiorIdade}</p>`;


    resultado.innerHTML = html;


    //f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
    const txtIdade = document.getElementById("txtIdade");
    const btnIdade = document.getElementById("btnIdade");
    btnIdade.addEventListener('click', function () {
        var Verifica = vet.every(elementos => elementos >= Number(txtIdade.value));
        resulIdade.innerHTML = `<p>Todas as Idades são maiores os iguais : ${Verifica}</p>`;
    });

    //g) Exibir todas as idades maiores ou iguais a determinada idade
    const txtValor = document.getElementById("txtValor");
    const btnValor = document.getElementById("btnValor");
    btnValor.addEventListener('click', function () {
        const maiores = vet.filter(elementos =>
            elementos >= Number(txtValor.value));
        resulValor.innerHTML = `<p>Idades Maiores ou iguais : ${maiores}</p>`
    });

    //h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
    const txtMedia = document.getElementById("txtMedia");
    const btnMedia = document.getElementById("btnMedia");
    btnMedia.addEventListener('click', function () {
         const idades = vet.filter(elementos =>
            elementos >= Number(txtMedia.value));
         const idadeMedia = idades.reduce((elementos, indice) => elementos + indice, 0) / idades.length;
        resulMedia.innerHTML = `<p>Idade Media dos Valores : ${idadeMedia}</p>`

    });
    









});