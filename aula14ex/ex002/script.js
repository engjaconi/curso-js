let tabuada = window.document.getElementById('tabuada');
tabuada.style.display = 'none';

function Calcular() {
    let numero = window.document.getElementById('numero');
    let tabuada = window.document.getElementById('tabuada');
    
    if ( numero.value.length == 0 ) {
        window.alert('Informe o número para gerar a tabuada!');
    } else {
        let n = Number(numero.value);
        tabuada.style.display = 'block';
        tabuada.innerHTML = "";

        for( let cont = 0; cont <= 10; cont++ ){
            let option = document.createElement('option');
            option.text = `${n}x${cont}= ${n*cont}`;
            option.value = `${cont}`;
            tabuada.appendChild(option);
        }
    }
}