// Quando criamos um objeto com "const" mas alteramos os atributos
// pessoa aponto para o endereço 123. E em 123 temos os valores {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa)

// Se tentarmos mudar os valores para o objeto pessoa, dá erro
//pessoa = { nome: 'Ana' }; // vai dar erro

// Para impedir que o atributo possa ser alterado, usamos freeze
Object.freeze(pessoa) // congelamos

pessoa.nome = 'Maria';
console.log(pessoa.nome) // vai mostrar Pedro