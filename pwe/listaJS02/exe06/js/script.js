
numero = [];

 while (numero.length < 6) {

    sorteado = Math.floor(Math.random() * 60) + 1;


    if(!numero.includes(sorteado)){
        numero.push(sorteado);
    }  
}

document.write("<h2>" +numero +"</h2>")

