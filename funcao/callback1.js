// Callback : passar uma função para outra função
// a partir de um evento. A função callback pode
// ser chamada uma vez ou várias vezes, como no caso
// de um array

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)   
};

fabricantes.forEach(imprimir) // para cada elemento do array vai chamar a funçao

///////////////////
fabricantes.forEach(fabricantes => console.log(fabricantes));