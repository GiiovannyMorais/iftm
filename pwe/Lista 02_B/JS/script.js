import userTable from "./users.js";

window.addEventListener("DOMContentLoaded", function () {

    document.getElementById("select").addEventListener("change", function () {

        let caixa = document.getElementById("box");
        caixa.innerHTML = "";
        let p = document.createElement('p');
        

        switch (document.getElementById("select").value) {

            case "1":


                userTable.filter(user => user.idade >= 18).forEach(user => {

                    let p = document.createElement('p');
                    p.innerText = `${user.nome} tem ${user.idade} anos`;
                    caixa.appendChild(p);
                })

                break;

            case "2":

                userTable.filter(user => user.sexo == "M").forEach(user => {

                    let p = document.createElement('p');
                    p.innerText = `${user.nome} tem o sexo Masculino `;
                    caixa.appendChild(p);

                })

                break;

            case "3":
                const maiorSalario = userTable.reduce((maior, user) => {
                    return user.salario > maior.salario ? user : maior;
                })

                let p = document.createElement('p');
                p.innerText = `[nome: ${maiorSalario.nome}, idade: ${maiorSalario.idade}, sexo: ${maiorSalario.sexo}, salario:${maiorSalario.salario} ]`;
                caixa.appendChild(p);

                break;

            case "4":
                // true or false
                const some = userTable.some(user => user.sexo === "F" && user.salario > 5.000)
                let existe = document.createElement('p');
                existe.innerText = `${some}`;
                caixa.appendChild(existe);
 
                 break;

            case "5":
                const homens = userTable.filter(user => user.sexo === "M");
                const mulheres = userTable.filter(user => user.sexo === "F");


                const mediaM = homens.reduce((total, user) => total + user.salario, 0) / homens.length;
                let reduce = document.createElement('p');
                reduce.innerText = `Media do Salario Masculino: ${mediaM.toFixed(2)}`;
                caixa.appendChild(reduce);

                const mediaF = mulheres.reduce((total, user) => total + user.salario, 0) / mulheres.length;

                let reduceF = document.createElement('p');
                reduceF.innerText = `Média do Salário Feminino: ${mediaF.toFixed(2)}`;
                caixa.appendChild(reduceF);


            default:
                break;

        }

    });

});