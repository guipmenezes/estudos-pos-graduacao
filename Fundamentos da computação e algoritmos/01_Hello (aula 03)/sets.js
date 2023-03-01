var meuSet = new Set();

meuSet.add(0);
console.log(meuSet);
console.log("*=*=*=*=*=*");

meuSet.add(1);
console.log(meuSet);
console.log("*=*=*=*=*=*");

meuSet.add(2);
console.log(meuSet);
console.log("*=*=*=*=*=*");

meuSet.add(3);
console.log(meuSet);
console.log("*=*=*=*=*=*");

meuSet.add(1);
console.log(meuSet);
console.log("*=*=*=*=*=*");

meuSet.add(0);
console.log(meuSet);
console.log("*=*=*=*=*=*");

for(let item of meuSet)
    console.log(item);