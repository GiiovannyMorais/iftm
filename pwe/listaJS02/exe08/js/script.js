

document.write(`<h1><p>Resultado do Jogo</p></h1>`)

indiceJog1 = Math.floor(Math.random()*3) + 1;
document.write("Jogador 1<img src=img/"+indiceJog1+".png>");

indiceJog2 = Math.floor(Math.random()*3) + 1;
document.write("Jogador 2<img src=img/"+indiceJog2+".png>");

if (indiceJog1 == indiceJog2)
    document.write("<h2>Empate</h2>")
else if (indiceJog1 == 1 && indiceJog2 == 3 ||indiceJog1 == 2 && indiceJog2 == 1 || indiceJog1 == 3 && indiceJog2 == 2 )
    document.write("<h1>Jogador 2 venceu</h1>")
 else if (indiceJog1 == 1 && indiceJog2 == 2||indiceJog1 == 2 && indiceJog2 == 3||indiceJog1 == 3 && indiceJog2 == 1)
    document.write("<h1>Jogador 1 venceu</h1>")







