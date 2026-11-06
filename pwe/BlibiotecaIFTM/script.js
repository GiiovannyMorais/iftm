// Lista de obras de exemplo
var obras = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", isbn: "9788535902775" },
    { titulo: "Quincas Borba", autor: "Machado de Assis", isbn: "9788508129225" },
    { titulo: "Vidas Secas", autor: "Graciliano Ramos", isbn: "9788501022202" },
    { titulo: "A Hora da Estrela", autor: "Clarice Lispector", isbn: "9788532508126" },
    { titulo: "Capitães da Areia", autor: "Jorge Amado", isbn: "9788535914061" },
    { titulo: "O Cortiço", autor: "Aluísio Azevedo", isbn: "9788508040063" }
];

var formulario = document.getElementById("formulario");
var mensagem = document.getElementById("mensagem");
var resultados = document.getElementById("resultados");
var botaoBuscar = document.getElementById("buscar");
var botaoCancelar = document.getElementById("cancelar");
var campoIsbn = document.getElementById("isbn");
var timer;


function limparTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = tipo || "";
}

function irParaResultados() {
    mensagem.scrollIntoView({ behavior: "smooth", block: "start" });
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    resultados.innerHTML = "";
    campoIsbn.classList.remove("invalido");

    var autor = limparTexto(document.getElementById("autor").value);
    var titulo = limparTexto(document.getElementById("titulo").value);
    var isbn = campoIsbn.value.replace(/-/g, "").toLowerCase();

    
    if (autor === "" && titulo === "" && isbn === "") {
        mostrarMensagem("Preencha pelo menos um campo para buscar.", "erro");
        document.getElementById("autor").focus();
        return;
    }

    
    if (isbn !== "" && isbn.length !== 10 && isbn.length !== 13) {
        mostrarMensagem("O ISBN deve ter 10 ou 13 dígitos. Você digitou " + isbn.length + ".", "erro");
        campoIsbn.classList.add("invalido");
        campoIsbn.focus();
        return;
    }

    
    mostrarMensagem("Buscando obras...");
    botaoBuscar.disabled = true;
    botaoCancelar.hidden = false;

    timer = setTimeout(function () {
        botaoBuscar.disabled = false;
        botaoCancelar.hidden = true;

        var encontradas = obras.filter(function (obra) {
            return limparTexto(obra.autor).includes(autor) &&
                   limparTexto(obra.titulo).includes(titulo) &&
                   obra.isbn.includes(isbn);
        });

        
        if (encontradas.length === 0) {
            mostrarMensagem("Nenhuma obra encontrada. Confira a grafia ou apague algum campo.", "erro");
            irParaResultados(); 
            return;
        }


        mostrarMensagem(encontradas.length + " obra(s) encontrada(s):", "sucesso");
        encontradas.forEach(function (obra) {
            var item = document.createElement("li");
            item.textContent = obra.titulo + " - " + obra.autor + " (ISBN " + obra.isbn + ")";
            resultados.appendChild(item);
        });
        irParaResultados(); 
    }, 1200);
});


botaoCancelar.addEventListener("click", function () {
    clearTimeout(timer);
    botaoBuscar.disabled = false;
    botaoCancelar.hidden = true;
    mostrarMensagem("Busca cancelada. Seus dados foram mantidos.");
});


document.getElementById("limpar").addEventListener("click", function () {
    formulario.reset();
    campoIsbn.classList.remove("invalido");
    resultados.innerHTML = "";
    mostrarMensagem("");
});