number1 = parseInt(prompt("Digite o primeiro numero"))

number2 = parseInt(prompt("Digite o segundo numero"))

aleatorio = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;

document.write("<p> Numero entre " + number1 + " e " + number2+": "+ aleatorio+ "</p>");