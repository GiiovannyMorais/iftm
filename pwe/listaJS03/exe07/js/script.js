login = document.getElementById("txtLogin");
senha = document.getElementById("txtSenha");      
confirma = document.getElementById("txtConfirmaSenha");   
entrar = document.getElementById("btnEntrar");   
limpar = document.getElementById("btnLimpar"); 

entrar.addEventListener("click", entrando) 
   function entrando(){
    if (login.value === "" || senha.value === "" || confirma.value === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha.value.length > 8) {
        alert("A senha não pode ter mais de 8 caracteres!");
        return;
    }

    if (senha.value !== confirma.value) {
        senha.value = "";
        confirma.value = "";
        alert("As senhas não conferem!");
        return;
    }

    alert("Login realizado!");
};

limpar.addEventListener("click", limpa)

function limpa(){
    login.value = "";
    senha.value = "";
    confirma.value = "";
};

