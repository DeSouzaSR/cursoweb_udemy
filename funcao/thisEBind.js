const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre prog funcional e OO

// Para resolver, usar bind

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()