$(document).ready(function() {
  // Função executada quando o documento HTML é carregado

  // Mudar cor do fundo ao passar o mouse em cima
  $('.pessoa').hover(function() {
    // Quando o mouse entra no elemento
    $(this).css('background-color', 'gray'); // Define a cor de fundo como cinza
    $(this).css('color', 'white'); // Define a cor do texto como branco
  }, function() {
    // Quando o mouse sai do elemento
    $(this).css('background-color', 'white'); // Define a cor de fundo como branco
    $(this).css('color', 'black'); // Define a cor do texto como preto
  });

  // Rotacionar a imagem ao passar o mouse em cima dela
  $('.foto').hover(function() {
    // Quando o mouse entra na imagem
    $(this).css({
      'transform': 'rotate(360deg)', // Aplica uma rotação de 360 graus
      'transition': 'transform 0.5s' // Define uma transição suave de 0.5 segundos
    });
  }, function() {
    // Quando o mouse sai da imagem
    $(this).css({
      'transform': 'rotate(0deg)', // Remove a rotação aplicada, voltando à posição inicial
      'transition': 'transform 0.5s' // Define uma transição suave de 0.5 segundos
    });
  });
  
  // Mostrar uma mensagem ao clicar na descrição
  $('.descricao').click(function() {
    // Quando a descrição é clicada
    alert('Esse currículo foi feito pela Ana Goes !'); // Exibe um alerta com o texto "Ana Banana!"
  });

  // Função para gerar uma cor aleatória
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Mudar cor dos elementos ao passar o mouse em cima da seção de educação
  $('.educacao').hover(function() {
    // Quando o mouse entra na seção de educação
    $(this).css({
      'cursor': 'pointer' // Altera o cursor do mouse para o estilo de ponteiro
    });

    $(this).find('*').not('.educacao__titulo, .line__educacao').each(function() {
      // Para cada elemento dentro da seção de educação, exceto o título e a linha
      var randomColor = getRandomColor(); // Gera uma cor aleatória
      $(this).css({
        'color': randomColor // Define a cor do elemento como a cor aleatória
      });
    });
  }, function() {
    // Quando o mouse sai da seção de educação
    $(this).find('*').not('.educacao__titulo, .line__educacao').each(function() {
      // Para cada elemento dentro da seção de educação, exceto o título e a linha
      $(this).css({
        'color': '' // Remove a cor definida, voltando à cor original
      });
    });
  });
});
