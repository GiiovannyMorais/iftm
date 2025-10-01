img = document.getElementById("pensativo");
msg = document.getElementById("msgPensativo");


        
img.addEventListener("mouseenter", Assustado);
img.addEventListener("mouseleave", Pensativo);
img.addEventListener("click", clicarNome);



function Assustado() {
    img.src = "img/Assustado.png";
    msg.textContent = "O que você quer?";
        
    }

function Pensativo() {
     img.src = "img/Pensativo.png";
     msg.textContent = "ZZZZZZZZZ!";
     }


function clicarNome() {
     
     nome = prompt("Qual é o seu nome?");
    if (!nome || nome.trim() === "") {
    img.src = "img/Nervoso.png";
    msg.textContent = "Não me faça perder o meu tempo!";
        
    img.classList.add("chacoalhar");
    setTimeout(() => {
    img.classList.remove("chacoalhar");
    }, 1000); 
    } else {
    img.src = "img/Alegre.png";
    msg.textContent = `${nome}, seja bem-vindo!`;

    img.classList.add("balancar");
    setTimeout(() => {
    img.classList.remove("balancar");
        }, 3000);
        }
        }