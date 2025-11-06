  window.addEventListener("DOMContentLoaded", function () {

            let nomes = [];
            let nome;

            while (true) {
                nome = prompt("Digite um nome ");
                
                if (nome === null || nome.trim() === "") {
                    break; 
                }

                nomes.push(nome); // adiciona no vetor
            }

            let indice = 0;
            let nomesUser = document.getElementById("nomesUser");

            if (nomes.length === 0) {
                nomesUser.innerHTML = "Nenhum nome digitado";
            } else {
                let intervalo = setInterval(function() {
                    if (indice < nomes.length) {
                        nomesUser.innerHTML += nomes[indice] + "<br>";
                        indice++;
                    } else {
                        clearInterval(intervalo); 
                    }
                }, 1000); 
            }

        });