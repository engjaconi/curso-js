function Verificar() {
    var ano = new Date().getFullYear();
    
    var fano = window.document.getElementById('txtano');
    var resultado = window.document.getElementById('resultado');

    if ( fano.value.length == 0 || fano.value > ano ) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var fsexo = window.document.getElementsByName('radsexo');
        var idade = ano - fano.value;
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if(fsexo[0].checked) {
            genero = 'Homem';

            if( idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/homem-crianca.jpg');
            } else if ( idade < 21 ) {
                img.setAttribute('src', 'imagens/homem-jovem.jpg');
            } else if ( idade < 50 ) {
                img.setAttribute('src', 'imagens/homem.jpg');
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.jpg');
            }
        } else if(fsexo[1].checked){
            genero = 'Mulher';

            if( idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/mulher-crianca.jpg');
            } else if ( idade < 21 ) {
                img.setAttribute('src', 'imagens/mulher-jovem.jpg');
            } else if ( idade < 50 ) {
                img.setAttribute('src', 'imagens/mulher.jpg');
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.jpg');
            }
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.append(img);
        resultado.style.textAlign = 'center';
    }
}