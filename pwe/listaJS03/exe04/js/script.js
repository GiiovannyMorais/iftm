bimestre1 = document.getElementById("txtbi1");
bimestre2 = document.getElementById("txtbi2");
resultado = document.getElementById("bntResultado");

resultado.addEventListener("click", aprovador);

function aprovador(){
     if(bimestre1.value >= 50 && bimestre2.value >= 50){
        if((bimestre1.value + bimestre2.value)/2 >= 60)
            
        alert("Aluno Aprovado");             
     } else {
        alert("Aluno Reprovado");
     }

}