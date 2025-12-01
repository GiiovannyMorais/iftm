window.addEventListener("DOMContentLoaded" , function(){
 
txtNome = document.getElementById("txtNome");
btnClicar = document.getElementById("btnClicar");

btnClicar.addEventListener("click" , validar);

function validar(){

   let padrao = /^[0-3]\d[/][0-1]\d[/](\d{2}|\d{4})$/; 

    (padrao.test(txtNome.value))?alert("valido"):alert("Invalido");
}; 


txtCodigo = document.getElementById("txtCodigo");
btnCpf = document.getElementById("btnCpf");

btnCpf.addEventListener("click" , validarCPF);

function validarCPF(){
   let cpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

(cpf.test(txtCodigo.value))?alert("valido"):alert("Invalido");
};

txtMatricula = document.getElementById("txtMatricula");
btnMatricula = document.getElementById("btnMatricula");

btnMatricula.addEventListener("click", function(){

let matricula = /^(IFTM|iftm)-\d{3}\/\d{3}\-\w{2}$/;

(matricula.test(txtMatricula.value))?alert("valido"):alert("Invalido");
});

txtDisciplina = document.getElementById("txtDisciplina");
btnDisciplina = document.getElementById("btnDisciplina");

btnDisciplina.addEventListener("click", function(){

    let disciplina = /^MT-\d{2}\.\d{3}\-IFTM$/i;

(disciplina.test(txtDisciplina.value))?alert("valido"):alert("Invalido");


});


txtDisciplina2 = document.getElementById("txtDisciplina2");
btnDisciplina2 = document.getElementById("btnDisciplina2");

btnDisciplina2.addEventListener("click", function(){

    let disciplina2 = /^MT-\d{2}\.\d{3}\-[I|i][F|f][T|t][M|m]$/;

(disciplina2.test(txtDisciplina2.value))?alert("valido"):alert("Invalido");


});

txtDisciplina3 = document.getElementById("txtDisciplina3");
btnDisciplina3 = document.getElementById("btnDisciplina3");

btnDisciplina3.addEventListener("click", function(){

    let disciplina3 = /^M\s?T[-]\d{2}[.]\d{3}[-]I\s?F\s?T\s?M$/i;

(disciplina3.test(txtDisciplina3.value))?alert("valido"):alert("Invalido");


});

txtDisciplina4 = document.getElementById("txtDisciplina4");
btnDisciplina4 = document.getElementById("btnDisciplina4");

btnDisciplina4.addEventListener("click", function(){

    let disciplina4 = /^M\s?T[-]\d{2}[.]\d{3}[-]I\s?F\s?T\s?M\s(Uberlândia Centro|Uberlândia)$/i;

(disciplina4.test(txtDisciplina4.value))?alert("valido"):alert("Invalido");


});

txtIFTM = document.getElementById("txtIFTM");
btnIFTM = document.getElementById("btnIFTM");

btnIFTM.addEventListener("click", function(){

    let iftm = /^IFTM\s(campus Uberlândia|campus Uberlândia Centro)$/;

(iftm.test(txtIFTM.value))?alert("valido"):alert("Invalido");


});

txtTelefone= document.getElementById("txtTelefone");
btnTelefone = document.getElementById("btnTelefone");

btnTelefone.addEventListener("click", function(){

    let telefone = /^\+\d{2}\(\d{2}\)\d{5}\-\d{4}$/;

(telefone.test(txtTelefone.value))?alert("valido"):alert("Invalido");


});

txtTelefone2= document.getElementById("txtTelefone2");
btnTelefone2 = document.getElementById("btnTelefone2");

btnTelefone2.addEventListener("click", function(){

    let telefone2 = /^[(]\d{2,3}[)]\d{5}\-\d{4}$/;

(telefone2.test(txtTelefone2.value))?alert("valido"):alert("Invalido");


});

txtAltura= document.getElementById("txtAltura");
btnAltura= document.getElementById("btnAltura");

btnAltura.addEventListener("click", function(){

    let Altura = /^[1-2](,|.)[3-5]\d?$/;

(Altura.test(txtAltura.value))?alert("valido"):alert("Invalido");


});

txtFatura= document.getElementById("txtFatura");
btnFatura= document.getElementById("btnFatura");

btnFatura.addEventListener("click", function(){

let Fatura = /^R\$\s*(?:[0-9]{1,3}(?:\.[0-9]{3}){0,3})(?:,[0-9]{1,2})?$/;

(Fatura.test(txtFatura.value))?alert("valido"):alert("Invalido");


});

txtCronometro= document.getElementById("txtCronometro");
btnCronometro= document.getElementById("btnCronometro");

btnCronometro.addEventListener("click", function(){

let Cronometro = /^(0\d|1\d|2[0-3])\:([0-5]\d)\:([0-5]\d)\:(\d\d)$/;

(Cronometro.test(txtCronometro.value))?alert("valido"):alert("Invalido");


});
txtSenha= document.getElementById("txtSenha");
btnSenha= document.getElementById("btnSenha");

btnSenha.addEventListener("click", function(){

let Senha = /^[A-Za-z0-9]{4,}[.\-_]&[A-Pa-p]+\.[aeiou]+(?:\.[A-Za-z0-5]+)?-\D+,[^A-Za-z0-9]{2}\.[^ab01]+$/;

(Senha.test(txtSenha.value))?alert("valido"):alert("Invalido");


});







});  