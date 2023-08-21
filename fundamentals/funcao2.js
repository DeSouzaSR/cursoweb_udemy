// Armazenando função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3)

// Armazenando uma função arrow
// o símbolo "=>" significa a palavra
// function 
const soma = (a, b) => {
    return a + b
}

//return implícito, mais simples ainda
const subtracao = (a, b) => a - b