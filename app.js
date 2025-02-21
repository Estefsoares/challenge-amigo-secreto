let amigos = [];
let nomeSorteado = [];

function adicionarNomes() {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value;
    if (nome == "") {
        alert("Por favor, insira um nome");
    }
    amigos.push(nome);
    atualizarLista();
    nomeAmigo.value="";
}
function atualizarLista() {
    let lista = document.getElementById(lista)
}