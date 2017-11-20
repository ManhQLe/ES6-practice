const fs = require('fs');

function *Gen1(){
    var x = 0;
    for(var i = 0;i<10;i++)
    {
        x = x +1;               
        yield;
    }
    return x;
}
var gen = Gen1();
fs.readFile("16.Map.js","utf8",function(data){
    console.log(data);
    console.log("From fs",gen.next().value)
    console.log("From fs",gen.next().value)
})


setTimeout(function(){
    for(var i =0;i<3;i++)
        console.log("From thread 1", gen.next().value);
},0);
setTimeout(function(){
    for(var i =0;i<6;i++)
    console.log("From thread 2", gen.next().value);
},0);

