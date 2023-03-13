class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, 'Professor');
        this.titulacao = titulacao;
    };
};