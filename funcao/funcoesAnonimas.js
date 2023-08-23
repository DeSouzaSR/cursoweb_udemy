// Funções anônimas são funções sem nome

const soma = function (x, y) {
    return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});

imprimirResultado(3, 4, (x, y) => x * y);


// Outra forma
const pessoa1 = {
    falar: function () {
        console.log("Opa");
    }
};

pessoa1.falar();

// Outra forma sem function
const pessoa2 = {
    falar() {
        console.log("Opa");
    }
};

pessoa2.falar();