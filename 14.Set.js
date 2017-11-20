const games = new Set(["One","Two","Three","Four"]);

console.log(games)

games.add("Six");
console.log(games)
games.add("Six")
console.log(games);
games.delete("One")
console.log(games);
games.delete("two")
console.log(games);
console.log(games.size)
console.log(games.has("Three"))
console.log(games.values())

console.log("For loop")
for(const x of games)
    console.log(x)