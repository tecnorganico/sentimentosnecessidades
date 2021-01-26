let cartasContainer = document.querySelector('.cartas');

let arrayNecessidades = [
    'necessidades/abrigo.jpg',
'necessidades/aceitacao.jpg',
'necessidades/alimento.jpg',
'necessidades/amizade.jpg',
'necessidades/amor.jpg',
'necessidades/apoderamento.jpg',
'necessidades/apoio.jpg',
'necessidades/apreciacao.jpg',
'necessidades/aprendizagem.jpg',
'necessidades/ar.jpg',
'necessidades/autenticidade.jpg',
'necessidades/autoexpressao.jpg',
'necessidades/autonomia.jpg',
'necessidades/beleza.jpg',
'necessidades/carinho.jpg',
'necessidades/celebracao.jpg',
'necessidades/coerencia.jpg',
'necessidades/compaixao.jpg',
'necessidades/competencia.jpg',
'necessidades/compreensao.jpg',
'necessidades/comunicacao.jpg',
'necessidades/comunidade.jpg',
'necessidades/conexao.jpg',
'necessidades/confiabilidade.jpg',
'necessidades/confianca.jpg',
'necessidades/conforto.jpg',
'necessidades/consideracao.jpg',
'necessidades/cooperacao.jpg',
'necessidades/criatividade.jpg',
'necessidades/cuidado.jpg',
'necessidades/descanso.jpg',
'necessidades/descoberta.jpg',
'necessidades/dignidade.jpg',
'necessidades/diversao.jpg',
'necessidades/eficacia.jpg',
'necessidades/eficiencia.jpg',
'necessidades/empatia.jpg',
'necessidades/equilibrio.jpg',
'necessidades/escolha.jpg',
'necessidades/espaco.jpg',
'necessidades/esperanca.jpg',
'necessidades/espontaneidade.jpg',
'necessidades/expressao.jpg',
'necessidades/flexibilidade.jpg',
'necessidades/fluidez.jpg',
'necessidades/harmonia.jpg',
'necessidades/honestidade.jpg',
'necessidades/igualdade.jpg',
'necessidades/inclusao.jpg',
'necessidades/inspiracao.jpg',
'necessidades/integridade.jpg',
'necessidades/intimidade.jpg',
'necessidades/liberdade.jpg',
'necessidades/lucidez.jpg',
'necessidades/luto.jpg',
'necessidades/motivacao.jpg',
'necessidades/movimento.jpg',
'necessidades/ordem.jpg',
'necessidades/organizacao.jpg',
'necessidades/participacao.jpg',
'necessidades/paz.jpg',
'necessidades/pertencimento.jpg',
'necessidades/previsibilidade.jpg',
'necessidades/privacidade.jpg',
'necessidades/proposito.jpg',
'necessidades/protecao.jpg',
'necessidades/reciprocidade.jpg',
'necessidades/reconhecimentoservisto.jpg',
'necessidades/respeito.jpg',
'necessidades/responsibilidade.jpg',
'necessidades/saude.jpg',
'necessidades/seguranca.jpg',
'necessidades/sustentabilidade.jpg',
'necessidades/tranquilidade.jpg',
'necessidades/valorizacao.jpg',


]

// let newImage = document.createElement('img');
// newImage.setAttribute('src', arraySentimentos[0]);
// newImage.setAttribute('class', 'cartas-img');
// cartasContainer.appendChild(newImage);

// for (let index = 0; index < arraySentimentos.length; index++) {
//   arraySentimentos[index];
// }

// Pega cada elemento por index do Array e executa o que tem dentro do .map
arrayNecessidades.map(imageSource => {
  let newImage = document.createElement('img'); // Cria o elemento <img src="">
  newImage.setAttribute('src', imageSource); // Insere o elemento do array
  newImage.setAttribute('class', 'cartas-img'); // Insere a classe para as imagens
  cartasContainer.appendChild(newImage); // Insere o elemento criado como filho DIRETO do cartas-container
  console.log(imageSource);
})