const url = "https://giiovannymorais.github.io/iftm/APIs/senhas/senhaHash.json";

export default async function getSenhas() {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao buscar JSON");
    }

    return await resposta.json();
}