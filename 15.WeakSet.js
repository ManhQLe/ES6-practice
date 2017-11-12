let a = {X:2}
const b = {X:3}
const c = {X:4}

const set1 = new WeakSet([a,b,c]);
console.log(set1);

a = null
console.log("Assign Variable to null")
console.log(set1);

