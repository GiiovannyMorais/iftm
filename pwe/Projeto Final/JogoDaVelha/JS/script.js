window.addEventListener("DOMContentLoaded", function () {

    
    const btnEntrar = document.getElementById("btnEntrar");
    const btnCadastrar = document.getElementById("btnCadastrar");
    
    const user = document.getElementById("usr");
    const pwd = document.getElementById("pwd");
    const img = document.getElementById("img");
    const dinamico = document.getElementById("dinamico");


    let clique = document.getElementById("click");
    
    const CHAVE = "usuarios";

    let musica1 = document.getElementById("musica1");
    const start = document.getElementById("btnStart");

    start.addEventListener("click" , () => {
        if (musica1.paused) {
            musica1.play();
        } else {
            musica1.pause();
        }
    });



    function cadastrarUser(newUser) {
        let usuarios = localStorage.getItem(CHAVE);

        if (usuarios == null) {
            localStorage.setItem(CHAVE, JSON.stringify([newUser]));
        } else {
            usuarios = JSON.parse(usuarios);
            usuarios.push(newUser);
            localStorage.setItem(CHAVE, JSON.stringify(usuarios));
        }
    }

    function consultarUser(credenciais) {
        let usuarios = localStorage.getItem(CHAVE);
 
        if (!usuarios) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Nenhum usuário cadastrado ainda."
            });
            return false;
        }

        usuarios = JSON.parse(usuarios);

        for (let i = 0; i < usuarios.length; i++) {
            if (
                usuarios[i].usuario === credenciais.usuario &&
                usuarios[i].senha === credenciais.senha
            ) {
                return true;
            }
        }

        Swal.fire({
            icon: "error",
            title: "Credenciais inválidas",
            text: "Usuário ou senha incorretos."
        });
        return false;
    }


    if (dinamico) {
    let p = document.createElement("p");
    p.id = "textoDinamico";
    p.textContent = "Cadastre-se agora menino(a)!";
    dinamico.appendChild(p);
}


    if (btnCadastrar) {
        btnCadastrar.addEventListener("click", function () {


            clique.play();
            if (user.value.trim() === "" || pwd.value.trim() === "") {

                Swal.fire({
                    icon: "warning",
                    title: "Campos vazios",
                    text: "Preencha usuário e senha."
                });
                return;
            }

            cadastrarUser({
                usuario: user.value,
                senha: pwd.value
            });

            // troca imagem
            if (img) img.src = "img/4.png";

            // texto dinâmico
            if (dinamico) {
                let p = document.getElementById("textoDinamico");

                if (!p) {
                    p = document.createElement("p");
                    p.id = "textoDinamico";
                    dinamico.appendChild(p);
                }

                p.textContent = "Cadastrado!";
            }

            

        });
    }


    
    if (btnEntrar) {
        btnEntrar.addEventListener("click", function () {

            clique.play();
            if (consultarUser({
                usuario: user.value,
                senha: pwd.value
            })) {
                
                window.location.href = "jogadores.html";
            }

        });
    }

});
