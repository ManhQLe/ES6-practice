const sym1 = Symbol("Test");
const sym2 = Symbol("Test");

console.log(`sym1 == sym2? ${sym1===sym2}`)

const Ex1 = {
    "Banana": "This is banana 1",
    "Banana":" This is banana 2"
}

console.log(`Ex1: `,Ex1);

const Ex2 = {
    [Symbol("Banana")]: "This is banana 1",
    [Symbol("Banana")]:" This is banana 2"
}

console.log(`Ex2: `,Ex2);
