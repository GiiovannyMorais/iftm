import getSenhas from "./senha.js";
import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formLogin").addEventListener("submit", validarLogin);
});

const validarLogin = async (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senhaUser = document.getElementById("senha").value.trim();

    try {
        const dados = await getSenhas();

        let usuarioEncontrado = false;
        let senhaCorreta = false;

        dados.forEach((u)=> {

            if (u["Username"] === usuario) {
                usuarioEncontrado = true;

                const senhaValida = bcrypt.compareSync(
                    senhaUser,
                    u["Password"]
                );

                if (senhaValida) {
                    senhaCorreta = true;
                }

        
            }
        });

        if (!usuarioEncontrado) {
            alert("Usuário não encontrado");
        } else if (!senhaCorreta) {
            alert("User Invalido");
        } else {
            alert("User Valido");
        }

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Erro ao carregar dados");
    }
};