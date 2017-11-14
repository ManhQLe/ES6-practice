const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
const letters = ["A","B","C","D","E"]
const string = "ABCDE"

console.log(...string);
const concat = [string,...letters];
const concat2 = [...books,...letters]
const concat3 = [...books];

console.log(...concat)
console.log(`Concat length: ${concat.length}`)

console.log("Concat 2\n",...concat2,"\n");
console.log("Concat 3\n",...concat3,'\n');