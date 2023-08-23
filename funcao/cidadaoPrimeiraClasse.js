// Função sendo cidadão de primeira classe significa que pode ser passado como dado
// Criar de forma litaral
function fun1() {};

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2];

// Armazenar função como atributo de um objeto

// função retorna funções
