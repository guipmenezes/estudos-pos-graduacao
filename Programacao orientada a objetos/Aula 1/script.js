//Exemplo Programação Estruturada:

/*let numero1 = 10;
let numero2 = 20;

function add(n1, n2) {
    return n1 + n2;
}

let z = add(numero1, numero2);
console.log(2);

let horasExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qtHoras);
console.log(total);
*/

//Exemplo POO
const calculadora = {
    numero1: 10,
    numero2: 20,
    soma: function() {
        return this.numero1 + this.numero2;
    }
};

console.log(calculadora.soma());

const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    horasExtra: 20,
    calculaSalario: function() {
        return this.salarioFixo + (this.valorHoraExtra * this.horasExtra);
    }
};

console.log(empregado.calculaSalario());