// Array para armazenar os nomes 
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  // Captura o valor do campo de texto
  let inputAmigo = document.getElementById("amigo");
  let nome = inputAmigo.value.trim();

  // Validar a entrada: não permite valores vazios
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return; 
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);

  // Atualiza a lista de amigos 
  atualizarLista();

  // Limpa o campo de entrada
  inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de renderizar

  // Itera sobre o array de amigos para criar a lista
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    li.className = "list-item"; 
    listaAmigos.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  // Valida se há nomes na lista antes de sortear
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione nomes antes de sortear.");
    return;
  }

  // Gera um índice aleatório para o array de amigos
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  // Exibe o nome sorteado na tela
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="result-item">O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}

//Colocar o botão reiniciar para funcionar
function reiniciarBotao() {
    amigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}
