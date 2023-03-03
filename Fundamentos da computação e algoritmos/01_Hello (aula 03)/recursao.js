//Fatorial sem recursão
function fatorial(numero) {
    if(numero < 0)
        return undefined;
    let total = 1;
    for(let n = numero; n > 1; n--)
        total = total * n;
    return total;
}

console.log(fatorial(5));

//Fatorial com recursão
function fatorialRecursivo(n) {
    if(n === 1 || n === 0)
        return 1;
    return n * fatorialRecursivo(n - 1)
}

console.log(fatorialRecursivo(5));
