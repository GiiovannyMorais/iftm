vetorCartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
vetorPares = [];

for (i = 0; i < 4; i++) {
aleatorio = Math.floor(Math.random() * vetorCartas.length);
carta = vetorCartas.splice(aleatorio, 1)[0];

vetorPares.push(carta, carta);

}
for ( i = vetorPares.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));

    vetorParesEmbaralhados = vetorPares[i];
    vetorPares[i] = vetorPares[j];
    vetorPares[j] = vetorParesEmbaralhados;

}

baralho = document.getElementById("baralho");

for (let i = 0; i < vetorPares.length; i++) {
    img = document.createElement("img");       
    img.src = "img/carta" + vetorPares[i] + ".png"; 
    baralho.appendChild(img);                   
}

console.log(vetorPares);