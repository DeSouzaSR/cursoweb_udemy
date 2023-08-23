// Formatação de dinheiro
function formata(valorEmReais) {
    console.log(`R$ ${valorEmReais.toFixed(2).toString().replace(".", ",")}`);
};

formata(0.30000004)