class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "estudante");
        this.matricula = matricula;
    };
    saudar() {
        super.saudar();
        console.log('colegas!');
    };
};