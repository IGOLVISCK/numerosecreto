let numeroSecreto= gerarNumero()
console.log(numeroSecreto)

let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}



function verificarChute() {
    chute = document.querySelector('input').value
    

    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1? 'Tentativas' : 'Tentativa';
        exibirTextoNaTela('.resultado', `Parabéns, Você ACERTOU o número secreto, com ${tentativa} ${palavraTentativa}`)
        restartGame();
    }else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('.resultado', `O número secreto é maior que ${chute}`)
           
        }
        if (chute > numeroSecreto){
            exibirTextoNaTela('.resultado', `O número secreto é menor que ${chute}`)
            
        }
        tentativa++
        limparCampo();
    }
}

function gerarNumero(){
    return parseInt(Math.random() *100 + 1)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function restartGame(){
    numeroSecreto = gerarNumero()
    tentativa = 1;
    console.log(numeroSecreto)
    limparCampo();
    exibirTextoNaTela('.resultado', '...')
}

