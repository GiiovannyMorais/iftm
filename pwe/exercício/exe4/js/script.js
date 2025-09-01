alert("Seja bem Vindo");


nota1 = parseFloat(prompt("Digite a nota 1:"));
if (nota1 == NaN) 
    alert("Deve ser utilizado apenas Numeros")
nota2 = parseFloat(prompt("Digite a nota 2:"));
notaTotal = nota1 + nota2;


if (notaTotal >= 60)
    alert(`Você está aprovado. Sua Nota foi ${notaTotal.toFixed(1)}`);
else
    alert(`Você está reprovado A sua nota foi ${notaTotal} pontos, Faltaram ${60-notaTotal} para passar `);



