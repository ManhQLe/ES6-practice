const myMap = new Map();
myMap.set("One",{T:1})
myMap.set("Two",{T:2})
myMap.set("Three",{T:3})
myMap.set("Four",{T:4})

console.log(myMap);

console.log(myMap.has("Three"));
myMap.delete("Two")
console.log(myMap)

var keys = myMap.keys()
var values = myMap.values();

for(var key of keys)
{
    console.log(key)
}

for(var o of values)
console.log(o)