let numeroSecretoDo1Ao10= gerarNumeroDo1Ao10()
console.log(numeroSecretoDo1Ao10)

let tentativaDo1Ao10 = 1;

function exibirTextoNaTelaDo1Ao10(tagDo1Ao10, textoDo1Ao10){
    let campoDo1Ao10 = document.querySelector(tagDo1Ao10)
    campoDo1Ao10.innerHTML = textoDo1Ao10
}



function verificarChuteDo1Ao10() {
    chuteDo1Ao10 = document.querySelector('.input-do-1ao10').value
    

    if (chuteDo1Ao10 == numeroSecretoDo1Ao10){
        let palavraTentativaDo1Ao10 = tentativaDo1Ao10 > 1? 'Tentativas' : 'Tentativa';
        exibirTextoNaTelaDo1Ao10('.resultado-do-1ao10', `Parabéns, Você ACERTOU o número secreto, com ${tentativaDo1Ao10} ${palavraTentativaDo1Ao10}`)
        document.getElementById('restart-do-1ao10').removeAttribute('disabled');
        document.getElementById('botao-chute-do-1ao10').setAttribute('disabled', 'disabled')
    }else {
        if (chuteDo1Ao10 < numeroSecretoDo1Ao10){
            exibirTextoNaTelaDo1Ao10('.resultado-do-1ao10', `O número secreto é maior que ${chuteDo1Ao10}`)
           
        }
        if (chuteDo1Ao10 > numeroSecretoDo1Ao10){
            exibirTextoNaTelaDo1Ao10('.resultado-do-1ao10', `O número secreto é menor que ${chuteDo1Ao10}`)
            
        }
        tentativaDo1Ao10++
        limparCampoDo1Ao10();
        if (tentativaDo1Ao10 == 3 + 1) {
            exibirTextoNaTelaDo1Ao10('.resultado-do-1ao10', `Tente novamente, você excedeu o numero de tentativas. O numero secreto era ${numeroSecretoDo1Ao10}`)
            document.getElementById('restart-do-1ao10').removeAttribute('disabled');
            document.getElementById('botao-chute-do-1ao10').setAttribute('disabled', 'disabled')
        }
    }

}



function gerarNumeroDo1Ao10(){
    return parseInt(Math.random() *10 + 1)
}

function limparCampoDo1Ao10() {
    chuteDo1Ao10 = document.querySelector('.input-do-1ao10');
    chuteDo1Ao10.value = '';
}

function restartGameDo1Ao10(){
    numeroSecretoDo1Ao10 = gerarNumeroDo1Ao10()
    tentativaDo1Ao10 = 1;
    console.log(numeroSecretoDo1Ao10)
    limparCampoDo1Ao10();
    exibirTextoNaTelaDo1Ao10('.resultado-do-1ao10', '...')
    document.getElementById('restart-do-1ao10').setAttribute('disabled', 'disabled')
    document.getElementById('botao-chute-do-1ao10').removeAttribute('disabled')
}
