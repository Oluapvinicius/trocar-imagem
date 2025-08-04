'use strict';

const botaoTrocarImagem = document.getElementById('trocarImagem');

function trocarImagem() {
    const imagem = document.getElementById('imagem').value;
    
    document.documentElement.style.setProperty('--bg-imagem', `url{./img/civic.jpg);
}

botaoTrocarImagem.addEventListener('click', trocarImagem);