function Calcular() {
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let passo = window.document.getElementById('passo');
    let resultado = window.document.getElementById('resultado');

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        resultado.innerHTML = 'Impossível contar! Verifique os dados informados!';
    } else {
        resultado.innerHTML = 'Contando:<br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if ( p <= 0 ) {
            window.alert('Passo inválido, considerando passo igual à 1!');
            p = 1;
        }

        if (i < f) {
            for (let cont = i; cont <= f; cont+= p) {
                resultado.innerHTML += `${cont} &#x1F449`;
            } 
        } else {
            for (let cont = i; cont >= f; cont-= p) {
                resultado.innerHTML += `${cont} &#x1F449`;
            } 
        }
        resultado.innerHTML += `&#x1F38C`;
    }

}