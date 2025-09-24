bimestre1 = document.getElementById("txtbi1");
bimestre2 = document.getElementById("txtbi2");
resultado = document.getElementById("bntResultado");

resultado.addEventListener("click", aprovador);

function aprovador(){
   nota1 = parseInt(bimestre1.value);
   nota2 = parseInt(bimestre2.value);
   media = (nota1 + nota2) / 2;
   
     if(nota1 >= 50 && nota2 >= 50){

        if(media >= 60){
         alert("APROVADO sua nota foi " + media);
        } else {
         faltantes = 60 - media;
         alert("REPROVADO " + media + " faltaram " + faltantes + " pontos");
      } 
     } else {
         faltantes = 60 - media;
         alert("REPROVADO " + media + " faltaram " + faltantes + " pontos");
     }
}