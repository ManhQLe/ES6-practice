const numbers = [2.0,3.0,4.0,5.0,8,9,10,3.5];

const [a,b,c,d,...int] = numbers;

console.log(a,b,c,d,"\n");

console.log(int);

function sum(...numbers){
    let s = 0;
    for(let n of numbers){
        s+=n;
    }
    return s
}

console.log("Sum:",sum(1,2,3,4,5))