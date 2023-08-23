// Funções factory retornam objetos
// Isto faz com que não precisemos ficar redigitando código

function criarPessoa() {
    return {
        nome: 'Ana',
        SobreNome: 'Silva'
    };
};

console.log(criarPessoa());