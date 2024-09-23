var elementos = document.querySelectorAll('.selecao-jogador div img');
var jogadorOpt = '';
var comOpt = '';

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(jogadorOpt == "papel"){

        if(comOpt == "papel"){
            vencedor.innerHTML = "Empatou";
            vencedor.style.color = 'black';
        }
        if(comOpt == "tesoura"){
            vencedor.innerHTML = "Você perdeu";
            vencedor.style.color = 'red';
        }
        if(comOpt == "pedra"){
            vencedor.innerHTML = "Você ganhou";
            vencedor.style.color = 'green';
        }
    }

    if(jogadorOpt == "tesoura"){

        if(comOpt == "tesoura"){
            vencedor.innerHTML = "Empatou";
            vencedor.style.color = 'black';
        }
        if(comOpt == "pedra"){
            vencedor.innerHTML = "Você perdeu";
            vencedor.style.color = 'red';
        }
        if(comOpt == "papel"){
            vencedor.innerHTML = "Você ganhou";
            vencedor.style.color = 'green';
        }
    }

    if(jogadorOpt == "pedra"){

        if(comOpt == "pedra"){
            vencedor.innerHTML = "Empatou";
            vencedor.style.color = 'black';
        }
        if(comOpt == "papel"){
            vencedor.innerHTML = "Você perdeu";
            vencedor.style.color = 'red';
        }
        if(comOpt == "tesoura"){
            vencedor.innerHTML = "Você ganhou";
            vencedor.style.color = 'green';
        }
    }
}

function resetCom() {
    const opcoesCom = document.querySelectorAll('.selecao-com div');
    for (var i = 0; i < opcoesCom.length; i++){
            opcoesCom[i].childNodes[0].style.opacity = .3;
    }
}

function comJogar(){
    let aleatorio = Math.floor(Math.random()*3);

    const opcoesCom = document.querySelectorAll('.selecao-com div');
    resetCom();

    for (var i = 0; i < opcoesCom.length; i++){
        if(i == aleatorio){
            opcoesCom[i].childNodes[0].style.opacity = 1;
            comOpt = opcoesCom[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
}

function resetarOpacidadeJogador() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = .3
    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (e) => {
        resetarOpacidadeJogador()
        e.target.style.opacity = 1;
        jogadorOpt = e.target.getAttribute('opt');

        comJogar()
    });
}