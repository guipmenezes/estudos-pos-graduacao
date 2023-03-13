class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    saudar() {
        console.log('Olá, eu sou ' + this.nome);
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};