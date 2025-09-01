valor1 = prompt("Digite o valor de R (0 a 255):");
valor2 = prompt("Digite o valor de G (0 a 255):");
valor3 = prompt("Digite o valor de B (0 a 255):");

cor = "rgb(" + valor1 + "," + valor2 + "," + valor3 + ")";

 document.write(
     "<h1 style='color:" + cor + "; text-align:center;'>Fundamentos de Web Design II</h1>"
    );