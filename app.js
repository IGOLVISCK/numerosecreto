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
        document.getElementById('restart').removeAttribute('disabled');
        document.getElementById('botao-chute').setAttribute('disabled', 'disabled')
    }else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('.resultado', `O número secreto é maior que ${chute}`)
           
        }
        if (chute > numeroSecreto){
            exibirTextoNaTela('.resultado', `O número secreto é menor que ${chute}`)
            
        }
        tentativa++
        limparCampo();
        if (tentativa == 5 + 1) {
            exibirTextoNaTela('.resultado', `Tente novamente, você excedeu o numero de tentativas. O numero secreto era ${numeroSecreto}`)
            document.getElementById('restart').removeAttribute('disabled');
            document.getElementById('botao-chute').setAttribute('disabled', 'disabled')
        }
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
    document.getElementById('restart').setAttribute('disabled', 'disabled')
    document.getElementById('botao-chute').removeAttribute('disabled')
}
