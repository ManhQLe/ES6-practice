const colors = ['red','green','blue','purple','magenta','white','black']
Array.prototype.TestX = function(){

}

console.log("For..in loop");
for(let x in colors){
    console.log(colors[x]);
}
console.log('');
console.log("For..of loop")
for(let color of colors){
    console.log(color);
}