// Função arrow é sempre uma função anônima

let dobro = function(a) {
    return 2 * a;
};

// sobreescrevendo como uma função arrow.
// Por ser arrow, é sempre anônima. Então deve ser associada
// a uma variável
dobro = (a) => {
    return 2 * a;
};

// Pode ser tirado o parênteses se a função tiver um único parâmetro
// Quando tira o corpo da função {} o return é chamado implicitamente.
dobro = a => 2 * a;
console.log(dobro(Math.PI));