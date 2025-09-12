
  document.write("<h1>Jogue Truco! </h1>");
  document.write('<h3 style="color:red">Cartas Sorteadas</h3>');

  baralho = [];
  for (let i = 1; i <= 27; i++) {
    baralho.push("cartas/carta" + i + ".png");
  }

 
  baralho.sort(() => Math.random() - 0.5);

  
  for (let j = 1; j <= 4; j++) {
    document.write("<p>Jogador " + j + ":</p>");
    for (let c = 0; c < 3; c++) {
      let carta = baralho.shift(); 
      document.write("<img src='" + carta + "'>");
    }
  }

