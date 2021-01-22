let cartasContainer = document.querySelector('.cartas');

let arraySentimentos = [
  'sentimentos/segura.jpg',
  'sentimentos/paralisade.jpg',
  'sentimentos/relaxada.jpg',
  'sentimentos/irritade.jpg',
  'sentimentos/enciumade.jpg',
  'sentimentos/decepcionada.jpg'
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