function Verificar() {
    let hora = new Date().getHours();
    
    let mensagemHora = window.document.querySelector('div#hora');
    mensagemHora.innerHTML = `<p>Agora são ${hora} horas.</p>`;
    let imagem = window.document.querySelector('div#saudacao>img');
    
    if ( hora < 12 ) {
        mensagemHora.innerHTML += 'Bom Dia!';
        imagem.src = 'imagens/amanhecer.jpg';
        document.body.style.backgroundColor = '#F27329';
    } else if ( hora <= 18 ) {
        mensagemHora.innerHTML += 'Boa Tarde!';
        imagem.src = 'imagens/entardecer.jpg';
        window.document.body.style.backgroundColor = '#BF4011';
    } else {
        mensagemHora.innerHTML += 'Boa Noite!';
        imagem.src = 'imagens/anoitecer.jpg';
        window.document.body.style.backgroundColor = '#365659';
    }
}