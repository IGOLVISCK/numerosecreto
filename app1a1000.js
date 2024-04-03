let numeroSecretoDo1Ao1000= gerarNumeroDo1Ao1000()
console.log(numeroSecretoDo1Ao1000)

let tentativaDo1Ao1000 = 1;

function exibirTextoNaTelaDo1Ao1000(tagDo1Ao1000, textoDo1Ao1000){
    let campoDo1Ao1000 = document.querySelector(tagDo1Ao1000)
    campoDo1Ao1000.innerHTML = textoDo1Ao1000
}



function verificarChuteDo1Ao1000() {
    chuteDo1Ao1000 = document.querySelector('.input-do-1ao1000').value
    

    if (chuteDo1Ao1000 == numeroSecretoDo1Ao1000){
        let palavraTentativaDo1Ao1000 = tentativaDo1Ao1000 > 1? 'Tentativas' : 'Tentativa';
        exibirTextoNaTelaDo1Ao1000('.resultado-do-1ao1000', `Parabéns, Você ACERTOU o número secreto, com ${tentativaDo1Ao1000} ${palavraTentativaDo1Ao1000}`)
        document.getElementById('restart-do-1ao1000').removeAttribute('disabled');
        document.getElementById('botao-chute-do-1ao1000').setAttribute('disabled', 'disabled')
    }else {
        if (chuteDo1Ao1000 < numeroSecretoDo1Ao1000){
            exibirTextoNaTelaDo1Ao1000('.resultado-do-1ao1000', `O número secreto é maior que ${chuteDo1Ao1000}`)
        }
        if (chuteDo1Ao1000 > numeroSecretoDo1Ao1000){
            exibirTextoNaTelaDo1Ao1000('.resultado-do-1ao1000', `O número secreto é menor que ${chuteDo1Ao1000}`)
            
        }
        tentativaDo1Ao1000++
        limparCampoDo1Ao1000();
        if (tentativaDo1Ao1000 == 12 + 1) {
            exibirTextoNaTelaDo1Ao1000('.resultado-do-1ao1000', `Tente novamente, você excedeu o numero de tentativas. O numero secreto era ${numeroSecretoDo1Ao1000}`)
            document.getElementById('restart-do-1ao1000').removeAttribute('disabled');
            document.getElementById('botao-chute-do-1ao1000').setAttribute('disabled', 'disabled')
        }
    }

}



function gerarNumeroDo1Ao1000(){
    return parseInt(Math.random() *1000 + 1)
}

function limparCampoDo1Ao1000() {
    chuteDo1Ao1000 = document.querySelector('.input-do-1ao1000');
    chuteDo1Ao1000.value = '';
}

function restartGameDo1Ao1000(){
    numeroSecretoDo1Ao1000 = gerarNumeroDo1Ao1000()
    tentativaDo1Ao1000 = 1;
    console.log(numeroSecretoDo1Ao1000)
    limparCampoDo1Ao1000();
    exibirTextoNaTelaDo1Ao1000('.resultado-do-1ao1000', '...')
    document.getElementById('restart-do-1ao1000').setAttribute('disabled', 'disabled')
    document.getElementById('botao-chute-do-1ao1000').removeAttribute('disabled')
}
