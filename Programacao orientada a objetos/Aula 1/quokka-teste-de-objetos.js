//Quokka da Função construtora - criando um objeto com base em construtores
function Pessoa(nome, ano, profissao) {
    this.nome = nome;
    this.anoDeNascimento = ano;
    this.profissao = profissao;
    this.calculaIdade = function() {
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    }
};

const pessoa1 = new Pessoa('Guilherme', 1999, 'Estudante');
const pessoa2 = new Pessoa('Matheus', 1997, 'Analista de sistemas');
const pessoa3 = new Pessoa('Gustavo', 2002, 'Estudante');

console.log(pessoa1.calculaIdade());
console.log(pessoa2.calculaIdade());
console.log(pessoa3.calculaIdade());

console.log(pessoa1.__proto__);