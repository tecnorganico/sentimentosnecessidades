let cartasContainer = document.querySelector('.cartas');

let arraySentimentos = [
  'sentimentos/abalada.jpg',
  'sentimentos/abatide.jpg',
  'sentimentos/aflita.jpg',
  'sentimentos/alegre.jpg',
  'sentimentos/aliviade.jpg',
  'sentimentos/angustiade.jpg',
  'sentimentos/animade.jpg',
  'sentimentos/ansiose.jpg',
  'sentimentos/apavorade.jpg',
  'sentimentos/apreensiva.jpg',
  'sentimentos/assustade.jpg',
  'sentimentos/cansade.jpg',
  'sentimentos/carinhosa.jpg',
  'sentimentos/chateade.jpg',
  'sentimentos/chocade.jpg',
  'sentimentos/commedo.jpg',
  'sentimentos/comnojo.jpg',
  'sentimentos/comraiva.jpg',
  'sentimentos/confiante.jpg',
  'sentimentos/confortavel.jpg',
  'sentimentos/confusa.jpg',
  'sentimentos/contente.jpg',
  'sentimentos/curiose.jpg',
  'sentimentos/decepcionada.jpg',
  'sentimentos/deprimide.jpg',
  'sentimentos/desamparade.jpg',
  'sentimentos/desanimade.jpg',
  'sentimentos/desconectade.jpg',
  'sentimentos/desconfiade.jpg',
  'sentimentos/desconfortavel.jpg',
  'sentimentos/desencorajade.jpg',
  'sentimentos/desesperade.jpg',
  'sentimentos/desiludide.jpg',
  'sentimentos/empaz.jpg',
  'sentimentos/encantade.jpg',
  'sentimentos/enciumade.jpg',
  'sentimentos/energética.jpg',
  'sentimentos/entendiade.jpg',
  'sentimentos/envergonhade.jpg',
  'sentimentos/esperancosa.jpg',
  'sentimentos/exausta.jpg',
  'sentimentos/feliz.jpg',
  'sentimentos/frustrade.jpg',
  'sentimentos/furiosa.jpg',
  'sentimentos/grata.jpg',
  'sentimentos/impaciente.jpg',
  'sentimentos/impotente.jpg',
  'sentimentos/incomodade.jpg',
  'sentimentos/indecisa.jpg',
  'sentimentos/indiferente.jpg',
  'sentimentos/indignade.jpg',
  'sentimentos/infeliz.jpg',
  'sentimentos/inquieta.jpg',
  'sentimentos/insegure.jpg',
  'sentimentos/inspirade.jpg',
  'sentimentos/irritade.jpg',
  'sentimentos/magoade.jpg',
  'sentimentos/malhumorada.jpg',
  'sentimentos/nervosa.jpg',
  'sentimentos/orgulhose.jpg',
  'sentimentos/otimiste.jpg',
  'sentimentos/paralisade.jpg',
  'sentimentos/perdide.jpg',
  'sentimentos/perturbade.jpg',
  'sentimentos/preocupade.jpg',
  'sentimentos/relaxada.jpg',
  'sentimentos/ressentida.jpg',
  'sentimentos/satisfeita.jpg',
  'sentimentos/segura.jpg',
  'sentimentos/sozinhe.jpg',
  'sentimentos/surpresa.jpg',
  'sentimentos/tensa.jpg',
  'sentimentos/timide.jpg',
  'sentimentos/tranquile.jpg',
  'sentimentos/triste.jpg'
]

// let newImage = document.createElement('img');
// newImage.setAttribute('src', arraySentimentos[0]);
// newImage.setAttribute('class', 'cartas-img');
// cartasContainer.appendChild(newImage);

// for (let index = 0; index < arraySentimentos.length; index++) {
//   arraySentimentos[index];
// }

// Pega cada elemento por index do Array e executa o que tem dentro do .map
arraySentimentos.map(imageSource => {
  let newImage = document.createElement('img'); // Cria o elemento <img src="">
  newImage.setAttribute('src', imageSource); // Insere o elemento do array
  newImage.setAttribute('class', 'cartas-img'); // Insere a classe para as imagens
  cartasContainer.appendChild(newImage); // Insere o elemento criado como filho DIRETO do cartas-container
  console.log(imageSource);
})