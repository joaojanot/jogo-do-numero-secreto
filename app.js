let listaDeNumeros = [];
let limite = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
//Títulos
function campoTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//Criar mensagem incial no início e no reinício, usando a função acima
function mensagemInicial(){
    campoTexto('h1', 'Jogo do N. secreto');
    campoTexto('p', 'Escolha um número de 1 a 10');
}
//Rodando a função da mensagem inicial no início
mensagemInicial();
//Jogo de fato: Se acertou, roda o parabéns com a palavra tentativa no singular, senão repete até rodar o parabéns com a palavra tentativa no plural
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        campoTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
        let mensagemFinal = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        campoTexto('p', mensagemFinal);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute < numeroSecreto) {
                campoTexto('p', 'O número secreto é maior');
            } else {
                campoTexto('p', 'O número secreto é menor.');
            }
            tentativas ++;
            limparCampo();
        }
    }
function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let itensNaLista = listaDeNumeros.length;
    if (itensNaLista == limite) {
        listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}