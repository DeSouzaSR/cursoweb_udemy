const escola = 'Cod3r';

console.log(escola.charAt(4)); //r
console.log(escola.charAt(5)); // não retorna nada, nem erro, só um vazio
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('d'));

//Substrings
console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // não inclui o índice 3, como no Python

console.log("Escola ".concat(escola.concat("!")));
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e')); //; usando regex, substitui todos os dígitos( números ) pela letra e
console.log(escola.replace(/\w/g, 'e')); //; usando regex, letras e dígitos incluindo global "g". Este regex é como a do vim

// Convertendo uma string em um array
console.log('Ana, Maria, Pedro'.split(','));