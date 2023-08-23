// IIFE - Immeditely Invoked Function Expression - Ajuda a tratar a questão do escopo global

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()