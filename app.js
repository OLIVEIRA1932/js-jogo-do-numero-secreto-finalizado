var listasdeNumerosSorteados = [];
var numeroLimite = 10; // variavel criada para deixar dinamico    var
var numeroSecreto = numeroAleatorio();
var tentativas = 1;

function exibirTextonaTela(tag, texto) {
var campo = document.querySelector(tag);
campo.innerHTML = texto
responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}

function exibirMensagemInicial () {
exibirTextonaTela('h1', 'jogo do numero secreto');
exibirTextonaTela('p', 'escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    var chute = document.querySelector('input').value;

    if( chute == numeroSecreto) {
        exibirTextonaTela('h1', 'acertou!')
        var palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        var mensagemtentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavratentativa}`;
        exibirTextonaTela('p', mensagemtentativa)
        //código abaixo vai habilitar o botão novo jogo quando acertar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         if(chute > numeroSecreto) {
        exibirTextonaTela('p','o numero é menor');
         } else {
        exibirTextonaTela('p','o numero é maior');
        } 
        tentativas++;
       limparcampo()
    }
}

function numeroAleatorio () {
    var numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1 ); // var
    var qunatidadeDeElementoNaLista = listasdeNumerosSorteados.length;

         if (qunatidadeDeElementoNaLista == numeroLimite){ // var
             listasdeNumerosSorteados = []
         }

    if(listasdeNumerosSorteados.includes(numeroEscolhido)) { //includes vai verificar se o conteudo ja está incluido
        return numeroAleatorio(); // se o numero ja tiver na lista ele vai pedir para colocar outro numero
    } else {
        listasdeNumerosSorteados.push(numeroEscolhido)
        console.log(listasdeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo() {
    numeroSecreto = numeroAleatorio();
    limparcampo()
    tentativas = 1;
    exibirMensagemInicial()
    //esse código abaixo vai desabilitar o novo jogo assim que acertar
    document.getElementById('reiniciar').setAttribute('disabled', true)
}