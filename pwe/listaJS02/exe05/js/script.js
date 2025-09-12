
quantidade = parseInt(prompt("Digite a quantidade de Pessoas"));
nomes = [];
idades = [];
soma = 0


for (i=0; i<quantidade; i++){
    nome = prompt("Digite o nome do aluno"); 
    idade = parseInt(prompt("Digite a idade do aluno"));   

    nomes[i] = nome;
    idades[i] = idade;

    soma += idade;
}

media = soma / quantidade;
document.write(`A média de idade do grupo é: ${media}`);


indiceAleatorio = Math.floor(Math.random() * quantidade);
document.write("<br> O aluno sorteado foi: " + nomes[indiceAleatorio]);   
