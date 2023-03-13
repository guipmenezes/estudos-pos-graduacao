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

//Função para descobrir qual o tipo do Objeto
function descobreTipo(objeto) {
    if('Object' == objeto.constructor.name) {
        console.log('É um objeto raíz');
    } else {
        console.log('É um objeto do tipo: ' + objeto.constructor.name);
    }
}