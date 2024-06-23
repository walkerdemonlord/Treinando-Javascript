/* 
Função: trecho de código que só é executado 
quando é chamado/invocado.

    Função Void (vazia)
    Função com Parâmetros (s)
    Função Return
    Função Arrow    

*/

// Função Void (Vazia)

let valor = 20;

function incrementa () {
    console.log("Estou dentro da função");
}

incrementa() //chamando a função
console.log(valor);


/* ------------------------------------ */

let valor1 = 20;

function incrementa () {
    valor1++;
}

incrementa() //chamando a função, faz o cálcula e guarda
console.log(valor1); // mostra o novo valor de'valor'


// Função com Parâmetros (s)


mostraNome("Walker", "Rodrigues");

function mostraNome (a, b) {
    let x = a + b;
    console.log("Seu nome é {x}");
}

/* ------------------------------------ */

somaDosNumeros(30, 90, 25);

function somaDosNumeros (a, b, c) {
    const x = a + b + c;
    console.log("A Soma dos números é {x}");
}


// Função Return

const meusNumeros = soma (4,6);

function soma (n1, n2) {
    const somaDosNumeros = n1 + n2;
    return somaDosNumeros;
}

console.log(meusNumeros);


// Função Arrow - Forma moderna de escrever função

const multi = (n1, n2) => {
    const multiplicação = n1 * n2;
    return multiplicação;
}

const multiplicar = multi(2,5);
console.log(multiplicar);