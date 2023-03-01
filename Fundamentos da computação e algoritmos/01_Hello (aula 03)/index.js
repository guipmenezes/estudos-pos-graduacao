console.log('Hello world!!');
console.log('Fundamentos de Computação e Algoritmos');

function avaliaParOuImpar() {
    console.log('======================');
    console.log('Avaliador de paridade');
    console.log('======================');
    
    for(var i = 0; i <= 100; i++) {
        if(i % 2 == 0){
            console.log(i + ' é par');
        }
        else {
            console.log(i + ' é impar');
        }
    }
}

avaliaParOuImpar();