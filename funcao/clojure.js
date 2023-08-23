// closure é criando quando a função é declarada
// contexto lexico

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    };
    return dentro;
};

const minhaFuncao = fora();
console.log(minhaFuncao());