let numero = window.document.getElementById('numero');
let lista = window.document.getElementById('lista');
let resultado = window.document.getElementById('resultado');

let valores = [];

function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(numero) != -1) {
        return true;
    } else {
        return false;
    }
}

function Adicionar(){
    let n = Number(numero.value);

    if (isNumero(n) && !inLista(n, valores)) {
        valores.push(n)

        let option = window.document.createElement('option');
        option.text = `O valor ${n} foi adicionado`;
        option.value = n;
        lista.appendChild(option);
        resultado.innerHTML = '';
    } else {
        window.alert('Número já adicionado ou inválido! Informe um número válido!');
    }
    numero.value = '';
    numero.focus();
}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let quantidadeValores = valores.length;
        let maiorNumero = valores[0];
        let menorNumero = valores[0];
        let somaNumeros = 0;

        for(let i in valores) {
            if (valores[i] < menorNumero) {
                menorNumero = valores[i];
            }
            if (valores[i] > maiorNumero) {
                maiorNumero = valores[i];
            }
            somaNumeros += valores[i];
        }

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${quantidadeValores} número(s) cadastrado(s).</p>`;
        resultado.innerHTML += `<p>O menor valor é ${menorNumero}.</p>`;
        resultado.innerHTML += `<p>O maior valor é ${maiorNumero}.</p>`;
        resultado.innerHTML += `<p>A media dos valores é ${(somaNumeros/quantidadeValores).toFixed(2)}`
    }
}