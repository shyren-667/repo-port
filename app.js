// Criar o botão
const botao = document.createElement('button');
botao.textContent = 'Ver todos';

// Estilo do botão
botao.style.padding = '10px 20px';
botao.style.fontSize = '16px';
botao.style.cursor = 'pointer';
botao.style.backgroundColor = '#2a9d8f';
botao.style.color = 'white';
botao.style.border = 'none';
botao.style.borderRadius = '5px';

// Evento de clique para abrir uma nova página
botao.addEventListener('click', function() {
  window.open('jsj.html', '_blank'); // Aqui a URL que você quer abrir
});

// Adicionando o botão ao DOM
const container = document.getElementById('container');
container.appendChild(botao);
