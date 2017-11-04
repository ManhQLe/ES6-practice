function Test([s=2,n=2]=[2,3]){
    return s + n;    
}

function Test2({one=1,two=2}={}){
    return one + two;
}

console.log(Test());
console.log(Test([1,[4]]));

console.log(Test2({one:2,two:5}));
console.log(Test2({one:2}));
console.log(Test2());