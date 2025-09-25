valor1 = document.getElementById("txt1");
valor2 = document.getElementById("txt2");      
soma = document.getElementById("btnSoma");   
subtrai = document.getElementById("btnSubtrai");   
multi = document.getElementById("btnMultiplica");   
divisao = document.getElementById("btnDividir");   
resposta = document.getElementById("txtResultado"); 


soma.addEventListener("click", somando) 
function somando(){
    resposta.value = parseInt(valor1.value) + parseInt(valor2.value);
};

subtrai.addEventListener("click", subtraindo) 
function subtraindo(){
    resposta.value = parseInt(valor1.value) - parseInt(valor2.value);
};

multi.addEventListener("click", multiplica) 

function multiplica(){
    resposta.value = parseInt(valor1.value) * parseInt(valor2.value);
};

divisao.addEventListener("click", divi)
function divi() {
    if (parseInt(valor2.value) === 0) {
        alert("Não é possível dividir por zero!");
    } else {
        resposta.value = parseInt(valor1.value) / parseInt(valor2.value);
    }
};
