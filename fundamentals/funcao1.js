function imprimirSoma(a, b) {
    console.log(a + b);
}

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));