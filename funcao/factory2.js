function criarPessoa (nome, sobreNome) {
    return {
        nome: nome,
        sobreNome: sobreNome
    };
};

pessoa1 = criarPessoa('Ana', 'Silva');
console.log(pessoa1);

pessoa2 = criarPessoa('Pedro', 'Souza');
console.log(pessoa2);

///////////////////////////
// Fazendo de um jeito mais elegante e otimizado
function criarPessoa (nome, sobreNome) {
    return {
        nome,
        sobreNome,
        desconto: 0.1
    };
};

pessoa1 = criarPessoa('Ana', 'Silva');
console.log(pessoa1);

pessoa2 = criarPessoa('Pedro', 'Souza');
console.log(pessoa2);
