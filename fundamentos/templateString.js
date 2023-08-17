const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!
`

console.log(concatenacao, template)

//Usando arrow function
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`);