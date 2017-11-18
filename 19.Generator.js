function *pausable(){
    console.log("The function has started");
    const names =["A","B","C","D"];
    for(const name of names){
        console.log(name);
        yield;
    }

    console.log("function has ended");
}

const iter = pausable();
iter.next();
iter.next();


function *returnpausable(x){
    for(var i = 0;i<10;i++)
        yield x+i;
}

const iter2 = returnpausable(2);
console.log(iter2.next().value)
console.log(iter2.next().value)
console.log(iter2.next().value)


function *udacity(){
    yield 1;
    yield 2
}

const iter3 = udacity();
for(const v of iter3)
    console.log(v);
